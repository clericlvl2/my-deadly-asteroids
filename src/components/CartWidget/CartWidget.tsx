import styles from './CartWidget.module.scss';
import { Button } from '../../shared';
import { useContext } from 'react';
import { CartAsteroidsIdsContext } from '../../contexts';

const CartWidget = () => {
  const cartAsteroidsIds = useContext(CartAsteroidsIdsContext);

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.innerWrapper}>
        <div>
          <h3 className={styles.title}>Корзина</h3>
          <span className={styles.counter}>
            Астероидов: {cartAsteroidsIds.length}
          </span>
        </div>
        <Button text="Отправить" onClick={() => null} />
      </div>
    </div>
  );
};

export default CartWidget;
