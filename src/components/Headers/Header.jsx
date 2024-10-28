import styles from './Header.module.css'
import logo from '../../assets/react.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Task Manager</h1>
    </header>
  );
}

export default Header;
