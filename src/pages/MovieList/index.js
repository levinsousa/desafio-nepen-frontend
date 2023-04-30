import styles from "./styles.module.css"
import { Link } from 'react-router-dom';



export default function MovieList()  {
  
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
        
        <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
          <img src="https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg" alt="Capa do filme - " className={styles.posterImage} />
          <h2 className={styles.movieName}>Titulo do filme</h2>
          <p className={styles.movieDuration}>1:20:00</p>
          <p className={styles.movieYear}>2017</p>
        </Link>
        
      </main>
    </div>
  )
}