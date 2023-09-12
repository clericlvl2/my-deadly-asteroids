import styles from './CartControl.module.scss';
import { Button } from '../../shared';
import { useLocation, useNavigate } from 'react-router-dom';

export interface CartControlProps {
  asteroidId: string;
  isPurchased: boolean;
  isHazardous: boolean;
  onPurchaseAsteroid: (id: string) => void;
}

const CartControl = ({
  asteroidId,
  isHazardous,
  isPurchased,
  onPurchaseAsteroid,
}: CartControlProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAsteroidPage = location.pathname.includes('/asteroid');

  return (
    <div>
      <div className={styles.container}>
        <Button
          text={isPurchased ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          size="medium"
          theme={isPurchased ? 'accent' : undefined}
          onClick={e => {
            e.stopPropagation();
            onPurchaseAsteroid(asteroidId);
          }}
        />
        {isHazardous ? (
          <span className={styles.warning}>
            <span>&#9888;&#65039;</span> Опасен
          </span>
        ) : null}
      </div>
      {isAsteroidPage && (
        <Button
          className={styles.returnButton}
          text="ВЕРНУТЬСЯ"
          size="medium"
          theme="accent"
          onClick={e => {
            e.stopPropagation();
            navigate('/');
          }}
        />
      )}
    </div>
  );
};

export default CartControl;
