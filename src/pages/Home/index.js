import styles from './style.module.css';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';

function Home() {
  return (
    <div className={styles.Home}>
      <HeaderComponent>
        
      </HeaderComponent>
      <main className={styles.homeBody}>
        <h1>Todos os seus filmes favoritos em um só lugar!</h1>
        <h3>Faça sua análise sobre sua obra predileta</h3>
        <Link to="/movies" className={styles.homeButton}>Inicie Sua experiência!</Link>
      </main>
    </div>
  );
}

export default Home;