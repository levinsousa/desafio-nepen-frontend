import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom"
import api from "../../services/server"
import { useEffect, useState } from "react"
import HeaderComponent from "../../components/HeaderComponent";


export default function MovieList()  {
  const {id} = useParams()
  
  const [movie, setMovie] = useState([])
  const [commentValue, setCommentValue] = useState([])
  const [comment, setComment] = useState([])
  const userId = "KJAS874"
  
  useEffect(()=>{
    
    api.get(`/movie/${id}`).then(res => res.data).then(movie => setMovie(movie))
    api.get(`/comment/?movieId=${id}&userId=${userId}`).then(res => res.data).then(comment => {
      setComment(comment)
    })
  
  }, [])

  async function deleteMovie(){
    await api.delete(`movie/${id}`)
  }

  async function addComment(){
    console.log({commentValue, userId, id})
    await api.post('/comment', {
      comment: commentValue, userId, movieId: id
    })
  }

  async function deleteComment(commentId){
    console.log({commentValue, userId, id})
    await api.delete(`/comment/${commentId}`)
  }

  return (
    <div className={styles.MovieList}>
      <HeaderComponent>
      </HeaderComponent>
      <main className={styles.movieBody}>
        <Link to={'/movies'} style={{marginRight: '20pt'}} ><h3>Voltar</h3></Link>
        <img src={movie.urlPoster} alt={`Capa do filme - ${movie.title}`}  className={styles.posterImage} />
        <div className={styles.movieInfo}>
          <div className={styles.headerMovieInfo}>
            <h2 className={styles.movieName}>{String(movie.title)}</h2>
            <div className={styles.buttons}>
              <Link to={`/movie/edit/${id}`}>Editar</Link>
              <p>|</p>
              <Link to={'/movies'} onClick={() => deleteMovie()}>Excluir</Link>
            </div>
          </div>
          <p className={styles.movieDuration}>{String(movie.duration)}</p>
          <p className={styles.movieYear}>{String(movie.yearMovie)}</p>
          <p className={styles.movieDescription}>{String(movie.description)}</p>

          <hr className={styles.contentDivider}/>

          <div className={styles.avaliationHall}>
            <h3 className={styles.avaliationHallTitle}>E você, já assistiu a esse filme? Deixe sua avaliação pessoal</h3>
            <p className={styles.avaliationHallSubTitle}>Não se preucupe, só você pode ver :D</p>
            <textarea
              rows={5}
              className={styles.avaliationInput}
              onChange={(e) => setCommentValue(e.target.value)}
            />
            <Link onClick={() => addComment()} className={styles.avaliationSend}>Enviar</Link>

            <h3 className={styles.avaliationHallTitle}>Avaliações</h3>

            { comment && comment.map( comment => (
              <div key={comment._id}>
                <div className={styles.comment}>
                  <p className={styles.avaliationHallSubTitle}>{comment.comment}</p>
                  <Link onClick={() => deleteComment(comment._id)} style={{marginLeft: '12pt'}}><p>Excluir</p></Link>
                </div>
                <hr className={styles.contentDivider}/>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}