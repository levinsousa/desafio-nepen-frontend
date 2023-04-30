import styles from './styles.module.css'

export default function AddMovie(){
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
        <input type="text" id='titleMovie' placeholder='As aventuras de tintin...' className={styles.addMovieInput} />
        <label htmlFor="durationMovie" className={styles.addMovieLabel}>Duração do filme</label>
        <input type="" id='durationMovie' placeholder='1:00:37...' className={styles.addMovieInput} />
        <label htmlFor="yearMovie" className={styles.addMovieLabel}>Ano de Lançamento</label>
        <input type="number" id='yearMovie' className={styles.addMovieInput} />
        <label htmlFor="descriptionMovie" className={styles.addMovieLabel}>Descrição do filme</label>
        <textarea id="descriptionMovie" rows="10" className={styles.addMovieTextarea} />
        <button className={styles.addMovieSend}>Cadastrar</button>
      </main>
    </div>
  )
}