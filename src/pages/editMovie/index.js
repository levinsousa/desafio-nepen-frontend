import { useEffect,useState } from 'react'
import styles from './styles.module.css'
import api from '../../services/server'
import HeaderComponent from "../../components/HeaderComponent";
import { Link, useParams } from 'react-router-dom';


export default function EditMovie(){
  const {id} = useParams()
  
  const [ title, setTitle ] = useState('')
  const [ duration, setDuration ] = useState('')
  const [ yearMovie, setYearMovie ] = useState()
  const [ description, setDescription ] = useState('')
  const [ urlPoster, setUrlPoster ] = useState('')

  useEffect(()=>{
    api.get(`/movie/${id}`).then(res => res.data).then(movie => {
      setTitle(movie.title)
      setDuration(movie.duration)
      setYearMovie(movie.yearMovie)
      setDescription(movie.description)
      setUrlPoster(movie.urlPoster)
    })
  }, [])

  async function editMovieHandle(){
    console.log({title, duration, yearMovie, description, urlPoster})
    await api.patch(`/movie/${id}`, {title, duration, yearMovie, description, urlPoster})
      .then(e => console.log("Edição realizado com sucesso!"))
      .catch(error => console.error(error))
  }

  return(
    <div className={styles.editMovieDiv}>
      <HeaderComponent>
      </HeaderComponent>

      <main className={styles.editMovieBody}>
        <div className={styles.editMovieForm}>
          <h1 className={styles.editMovieH1}>Vamos realizar suas modificações agora</h1>
          <label htmlFor="titleMovie" className={styles.editMovieLabel}><h3>Título do filme</h3></label>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" id='titleMovie' placeholder='As aventuras de tintin...' className={styles.editMovieInput} />
          <label htmlFor="durationMovie" className={styles.editMovieLabel}><h3>Duração do filme</h3></label>
          <input value={duration} onChange={(e)=> setDuration(e.target.value)} type="text" id='durationMovie' placeholder='1:00:37...' className={styles.editMovieInput} />
          <label htmlFor="yearMovie" className={styles.editMovieLabel}><h3>Ano de Lançamento</h3></label>
          <input value={yearMovie} onChange={(e)=> setYearMovie(e.target.value)} type="number" id='yearMovie' placeholder='2023...' className={styles.editMovieInput} />
          <label htmlFor="descriptionMovie" className={styles.editMovieLabel}><h3>Descrição do filme</h3></label>
          <textarea value={description} onChange={(e)=> setDescription(e.target.value)} id="descriptionMovie" rows="10" className={styles.editMovieTextarea} />
          <label htmlFor="urlPoster" className={styles.editMovieLabel}><h3>Link do Poster do filme</h3></label>
          <input value={urlPoster} onChange={(e)=> setUrlPoster(e.target.value)} type="text" id='urlPoster' placeholder='https://...' className={styles.editMovieInput} />
          <Link to={'/movies'} onClick={() => editMovieHandle()} className={styles.editMovieSend}>Salvar modificações</Link>
          <Link to={'/movies'} className={styles.cancelButton}>Cancelar</Link>
        </div>
      </main>
    </div>
  )
}