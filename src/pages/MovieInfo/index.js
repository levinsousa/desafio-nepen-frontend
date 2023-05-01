import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom"
import api from "../../services/server"
import { useEffect, useState } from "react"

export default function MovieList()  {
  const {id} = useParams()
  
  const [movie, setMovie] = useState([])
  const [hasComment, setHascomment] = useState(false)
  const [commentValue, setCommentValue] = useState([])
  const [comment, setComment] = useState([])
  const userId = "KJAS874"
  
  useEffect(()=>{
    
    api.get(`/movie/${id}`).then(res => res.data).then(movie => setMovie(movie))
    api.get(`/comment/?movieId=${id}&userId=${userId}`).then(res => res.data).then(comment => {
      setComment(comment)
      setHascomment(true)
    })
  
  }, [])


  async function addComment(){
    console.log({commentValue, userId, id})
    await api.post('/comment', {
      comment: commentValue, userId, movieId: id
    })
  }

  return (
    <div className={styles.MovieList}>
      <header className={styles.header}>
        <span className={styles.headerTitle}> JaVi Pop </span>
        <div>
          <input type="text" placeholder="Pesquisa" className={styles.searchBox} />
          <button className={styles.searchButton}>Buscar</button>
        </div>
      </header>
      <main className={styles.movieBody}>
          <img src={movie.urlPoster} alt={`Capa do filme - ${movie.title}`}  className={styles.posterImage} />
        <div className={styles.movieInfo}>
          <h2 className={styles.movieName}>{String(movie.title)}</h2>
          <p className={styles.movieDuration}>{String(movie.duration)}</p>
          <p className={styles.movieYear}>{String(movie.yearMovie)}</p>
          <p className={styles.movieDescription}>{String(movie.description)}</p>

          <hr className={styles.contentDivider}/>

          <div className={styles.avaliationHall}>
            <h2 className={styles.avaliationHallTitle}>E você, já assistiu a esse filme? Deixe sua avaliação pessoal</h2>
            <p className={styles.avaliationHallSubTitle}>Não se preucupe, só você pode ver :D</p>
            <textarea
              rows={5}
              className={styles.avaliationInput}
              onChange={(e) => setCommentValue(e.target.value)}
            />
            <Link onClick={() => addComment()} className={styles.avaliationSend}>Enviar</Link>

            { hasComment && comment.map( comment => (
              <div key={comment._id}>
                <h2 className={styles.avaliationHallTitle}>Avaliações</h2>
                <p className={styles.avaliationHallSubTitle}>{comment.comment}</p>

                <hr className={styles.contentDivider}/>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}