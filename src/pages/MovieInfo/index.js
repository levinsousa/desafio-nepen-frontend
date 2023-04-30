import styles from "./styles.module.css"
import { useParams } from "react-router-dom"
import api from "../../services/server"
import { useEffect, useState } from "react"

export default function MovieList()  {
  const {id} = useParams()
  
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    
    api.get(`/movie/${id}`).then(res => res.data).then(res => setMovie(res))
  
  }, [])

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
            />
            <button className={styles.avaliationSend}>Enviar</button>
          </div>
        </div>
      </main>
    </div>
  )
}