import planetEarth from '../../assets/images/planet-earth.png';
import styles from './App.module.scss';
import { Header } from '../Header';
import { AsteroidsList } from '../AsteroidsList';
import { CartWidget } from '../CartWidget';
import { CartAsteroidsIdsContext } from '../../contexts';
import { useCartAsteroidsIds } from '../../hooks';

const App = () => {
  const [cartAsteroidsIds, handlePurchase] = useCartAsteroidsIds();

  return (
    <>
      <Header />
      <CartAsteroidsIdsContext.Provider value={cartAsteroidsIds}>
        <main className={styles.main}>
          <img className={styles.image} src={planetEarth} alt="Планета Земля" />
          <div className={styles.listWrapper}>
            <AsteroidsList onPurchaseAsteroid={handlePurchase} />
          </div>
          <div className={styles.cartWrapper}>
            <CartWidget />
          </div>
        </main>
      </CartAsteroidsIdsContext.Provider>
    </>
  );
};

export default App;
