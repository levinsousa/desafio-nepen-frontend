import styles from "./styles.module.css"
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react'
import api from "../../services/server"
import HeaderComponent from "../../components/HeaderComponent";
import searchIcon from '../../resources/icons/search_icon.svg'


export default function MovieList()  {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    
    api.get('/movies').then(res => res.data).then(res => setMovies(res))
  
  }, [])


  return (

    <div className={styles.MovieList}>
      <HeaderComponent>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Pesquisa" />
          <img className={styles.searchButton} src={searchIcon} alt="Ícone de pesquisa" />
        </div>
      </HeaderComponent>

      <main className={styles.movieListBody}>
        <div className={styles.header}>
          <h2>Últimos filmes adicionados</h2>
          <Link to={`/movie/add`}><h3>Adicionar um novo filme +</h3></Link>
        </div>
        <div className={styles.movies}>
          {movies.map(movie => (
            <Link to={`/movie/${movie._id}`} className={styles.movieCard}>
              <img src={movie.urlPoster} alt={`Capa do filme - ${movie.title}`} className={styles.posterImage} />
              <h3 className={styles.movieName}>{String(movie.title)}</h3>
              <p className={styles.movieDuration}>{String(movie.duration)}</p>
              <p className={styles.movieYear}>{String(movie.yearMovie)}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}