import styles from './CartWidget.module.scss';
import { Button } from '../../shared';
import { useContext } from 'react';
import { CartAsteroidsIdsContext } from '../../contexts';

export interface CartWidgetProps {
  onModalOpen: () => void;
}

const CartWidget = ({ onModalOpen }: CartWidgetProps) => {
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
        <Button
          text="Отправить"
          onClick={onModalOpen}
          isDisabled={cartAsteroidsIds.length === 0}
        />
      </div>
    </div>
  );
};

export default CartWidget;
