import styles from "./styles.module.css"
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react'
import api from "../../services/server"


export default function MovieList()  {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    
    api.get('/api').then(res => res.data).then(res => setMovies(res.movies))
  
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

      <main className={styles.movieListBody}>
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
            <img src="https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg" alt="Capa do filme - " className={styles.posterImage} />
            <h2 className={styles.movieName}>{String(movie.title)}</h2>
            <p className={styles.movieDuration}>{String(movie.duration)}</p>
            <p className={styles.movieYear}>{String(movie.yearMovie)}</p>
          </Link>
        ))}
        
      </main>
    </div>
  )
}