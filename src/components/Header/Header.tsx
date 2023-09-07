import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Armageddon 2023</h1>
      <p className={styles.subtitle}>ООО “Команда им. Б. Уиллиса”.</p>
      <p className={styles.subtitle}> Взрываем астероиды с 1998 года.</p>
    </header>
  );
};

export default Header;
