import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import logo from '../../resources/logo.svg'

export default function HeaderComponent(props){
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} width='60pt' alt="Logo de ticket Javi" />
        <span className={styles.headerTitle}> JaVie </span>
      </div>
      <div>
        {props.children}
      </div>
      <div className={styles.userHeaderDiv}>
        <Link to="/movies" className={styles.loginButton}>Log In</Link>
        <Link to="/movies" className={styles.registerButton}>Registrar-se</Link>
      </div>
    </header>
  )
}