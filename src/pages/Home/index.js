import style from './style.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={style.Home}>
      <header className={style.header}>
        <span className={style.headerTitle}> JaVi Pop </span>
        <div>
          <Link to="/movies" className={style.loginButton}>Log In</Link>
          <Link to="/movies" className={style.registerButton}>Registrar-se</Link>
        </div>
      </header>
      <main className={style.homeBody}>
        <h1>Todos os seus filmes favoritos em um só lugar!</h1>
        <p>Faça sua análise sobre sua obra predileta</p>
      </main>
    </div>
  );
}

export default Home;