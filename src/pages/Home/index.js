import style from './style.module.css';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';

function Home() {
  return (
    <div className={style.Home}>
      <HeaderComponent>
        
      </HeaderComponent>
      <main className={style.homeBody}>
        <h1>Todos os seus filmes favoritos em um só lugar!</h1>
        <h3>Faça sua análise sobre sua obra predileta</h3>
      </main>
    </div>
  );
}

export default Home;