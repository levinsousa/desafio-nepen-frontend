import styles from "./styles.module.css"

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
      <main className={styles.movieBody}>
          <img src="https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg" alt="Capa do filme - " className={styles.posterImage} />
        <div className={styles.movieInfo}>
          <h2 className={styles.movieName}>Título do filme</h2>
          <p className={styles.movieDuration}>1:20:00</p>
          <p className={styles.movieYear}>2017</p>
          <p className={styles.movieDescription}>Descrição do filme</p>

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