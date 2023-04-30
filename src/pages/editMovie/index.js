import styles from './styles.module.css'

export default function EditMovie(){
  return(
    <div className={styles.editMovieDiv}>
      <header className={styles.header}>
        <span className={styles.headerTitle}> JaVi Pop </span>
        <div>
        </div>
      </header>

      <main className={styles.editMovieForm}>
        <h1 className={styles.editMovieH1}>Precisa editar seu filme?</h1>
        <label htmlFor="titleMovie" className={styles.editMovieLabel}>Título do filme</label>
        <input type="text" id='titleMovie' placeholder='As aventuras de tintin...' className={styles.editMovieInput} />
        <label htmlFor="durationMovie" className={styles.editMovieLabel}>Duração do filme</label>
        <input type="" id='durationMovie' placeholder='1:00:37...' className={styles.editMovieInput} />
        <label htmlFor="yearMovie" className={styles.editMovieLabel}>Ano de Lançamento</label>
        <input type="number" id='yearMovie' className={styles.editMovieInput} />
        <label htmlFor="descriptionMovie" className={styles.editMovieLabel}>Descrição do filme</label>
        <textarea id="descriptionMovie" rows="10" className={styles.editMovieTextarea} />
        <button className={styles.editMovieSend}>Salvar</button>
      </main>
    </div>
  )
}