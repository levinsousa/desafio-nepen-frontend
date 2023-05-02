import { useState } from 'react'
import styles from './styles.module.css'
import api from '../../services/server'
import HeaderComponent from "../../components/HeaderComponent";
import { Link, useNavigate } from 'react-router-dom';

export default function AddMovie(){
  const navigate = useNavigate()
  const [ title, setTitle ] = useState('')
  const [ duration, setDuration ] = useState('')
  const [ yearMovie, setYearMovie ] = useState()
  const [ description, setDescription ] = useState('')
  const [ urlPoster, setUrlPoster ] = useState('')

  async function addMovieHandle(){
    await api.post('/movie', {title, duration, yearMovie, description, urlPoster})
    alert("Cadastro realizado com sucesso!")
    navigate('/movies')
  }

  return(
    <div className={styles.addMovieDiv}>
      <HeaderComponent>
      </HeaderComponent>

      <main className={styles.addMovieBody}>
        <form onSubmit={(e) => e.preventDefault} className={styles.addMovieForm}>
          <h1 className={styles.addMovieH1}>Hora de adicionar um novo filme!</h1>
          <label htmlFor="titleMovie" className={styles.addMovieLabel}><h3>Título do filme</h3></label>
          <input required onChange={(e)=> setTitle(e.target.value)} type="text" id='titleMovie' placeholder='As aventuras de tintin...' className={styles.addMovieInput} />
          <label htmlFor="durationMovie" className={styles.addMovieLabel}><h3>Duração do filme</h3></label>
          <input onChange={(e)=> setDuration(e.target.value)} type="text" id='durationMovie' placeholder='1:00:37...' className={styles.addMovieInput} />
          <label htmlFor="yearMovie" className={styles.addMovieLabel}><h3>Ano de Lançamento</h3></label>
          <input onChange={(e)=> setYearMovie(e.target.value)} type="number" id='yearMovie' placeholder='2023...' className={styles.addMovieInput} />
          <label htmlFor="descriptionMovie" className={styles.addMovieLabel}><h3>Descrição do filme</h3></label>
          <textarea onChange={(e)=> setDescription(e.target.value)} id="descriptionMovie" rows="10" className={styles.addMovieTextarea} />
          <label htmlFor="urlPoster" className={styles.addMovieLabel}><h3>Link do Poster do filme</h3></label>
          <input onChange={(e)=> setUrlPoster(e.target.value)} type="text" id='urlPoster' placeholder='https://...' className={styles.addMovieInput} />
          <button type="submit" onClick={() => addMovieHandle()} className={styles.addMovieSend}>Adicionar filme</button>
          <Link to={'/movies'} className={styles.cancelButton}>Cancelar</Link>
        </form>
      </main>
    </div>
  )
}