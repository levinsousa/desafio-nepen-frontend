import { useState } from 'react'
import styles from './styles.module.css'
import api from '../../services/server'

export default function AddMovie(){
  const [ title, setTitle ] = useState('')
  const [ duration, setDuration ] = useState('')
  const [ yearMovie, setYearMovie ] = useState()
  const [ description, setDescription ] = useState('')
  const [ urlPoster, setUrlPoster ] = useState('')

  async function addMovieHandle(){
    console.log({title, duration, yearMovie, description, urlPoster})
    await api.post('/movie', {title, duration, yearMovie, description, urlPoster})
    alert("Cadastro realizado com sucesso!");
  }

  return(
    <div className={styles.addMovieDiv}>
      <header className={styles.header}>
        <span className={styles.headerTitle}> JaVi Pop </span>
        <div>
        </div>
      </header>

      <main className={styles.addMovieForm}>
        <h1 className={styles.addMovieH1}>Hora de adicionar um novo filme!</h1>
        <label htmlFor="titleMovie" className={styles.addMovieLabel}>Título do filme</label>
        <input onChange={(e)=> setTitle(e.target.value)} type="text" id='titleMovie' placeholder='As aventuras de tintin...' className={styles.addMovieInput} />
        <label htmlFor="durationMovie" className={styles.addMovieLabel}>Duração do filme</label>
        <input onChange={(e)=> setDuration(e.target.value)} type="text" id='durationMovie' placeholder='1:00:37...' className={styles.addMovieInput} />
        <label htmlFor="yearMovie" className={styles.addMovieLabel}>Ano de Lançamento</label>
        <input onChange={(e)=> setYearMovie(e.target.value)} type="number" id='yearMovie' placeholder='2023...' className={styles.addMovieInput} />
        <label htmlFor="descriptionMovie" className={styles.addMovieLabel}>Descrição do filme</label>
        <textarea onChange={(e)=> setDescription(e.target.value)} id="descriptionMovie" rows="10" className={styles.addMovieTextarea} />
        <label htmlFor="urlPoster" className={styles.addMovieLabel}>Link do Poster do filme</label>
        <input onChange={(e)=> setUrlPoster(e.target.value)} type="text" id='urlPoster' placeholder='https://...' className={styles.addMovieInput} />
        <button onClick={() => addMovieHandle()} className={styles.addMovieSend}>Adicionar filme</button>
      </main>
    </div>
  )
}