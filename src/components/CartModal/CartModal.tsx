import styles from './CartModal.module.scss';
import { Button } from '../../shared/Button';
import { useContext, useEffect } from 'react';
import { CartAsteroidsIdsContext } from '../../contexts';
import { INFINITE_ASTEROIDS_KEY } from '../../api';
import queryClient from '../../api/query/queryClient.ts';
import { InfiniteAsteroidsData } from '../../utils/types.ts';
import { InfiniteData } from '@tanstack/react-query';
import { AsteroidIcon } from '../AsteroidIcon';

export interface CartModalProps {
  isOpen: boolean;
  onExit: () => void;
}

const CartModal = ({ isOpen, onExit }: CartModalProps) => {
  const cartAsteroidsIds = useContext(CartAsteroidsIdsContext);
  const data: InfiniteData<InfiniteAsteroidsData> | undefined =
    queryClient.getQueryData([INFINITE_ASTEROIDS_KEY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const asteroidsList = data
    ? data.pages
        .flatMap(item => item.data)
        .filter(item => cartAsteroidsIds.includes(item.id))
    : [];

  const handlePurchase = () => {
    alert('Функционал в процессе доработки');
    onExit();
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.opened : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Будет уничтожено</h2>
          <span>Астероидов: {cartAsteroidsIds.length}</span>
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            {asteroidsList.length > 0 &&
              asteroidsList.map(item => {
                const diameter = Math.round(
                  item.estimated_diameter.meters.estimated_diameter_min
                );
                return (
                  <li key={item.id}>
                    <div className={styles.asteroidInfo}>
                      <div className={styles.asteroidIcon}>
                        <AsteroidIcon size={diameter} />
                      </div>
                      <div className={styles.textContainer}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.diameter}>
                          &oslash; {diameter} м
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <Button
          text="ОТПРАВИТЬ КОМАНДУ"
          onClick={handlePurchase}
          size="medium"
        />
        <button type="button" className={styles.exitButton} onClick={onExit} />
      </div>
    </div>
  );
};

export default CartModal;
