import styles from './AsteroidCard.module.scss';
import { AsteroidsDataItem } from '../../utils/types.ts';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartAsteroidsIdsContext } from '../../contexts';
import { getApproachDate, getDistance } from '../../utils/helpers.ts';
import { DistanceBadge } from '../DistanceBadge';
import { CartControl } from '../CartControl';
import { AsteroidIcon } from '../AsteroidIcon';

export interface AsteroidCardProps {
  asteroidData: AsteroidsDataItem;
  onPurchaseAsteroid: (id: string) => void;
}

const AsteroidCard = ({
  asteroidData,
  onPurchaseAsteroid,
}: AsteroidCardProps) => {
  const navigate = useNavigate();
  const cartAsteroidsIds = useContext(CartAsteroidsIdsContext);

  const {
    id,
    name,
    is_potentially_hazardous_asteroid: isHazardous,
    estimated_diameter: sizeData,
    close_approach_data: approachData,
  } = asteroidData;

  // При запросе списка approachData каждого астероида содержит только один элемент
  const approachDate = getApproachDate(approachData[0].close_approach_date);
  const diameter = Math.round(sizeData.meters.estimated_diameter_min);
  const distance = getDistance(approachData[0].miss_distance);
  const isAddedToCart = cartAsteroidsIds.includes(id);

  return (
    <div
      className={styles.container}
      onClick={() => navigate('/asteroid/' + id)}
    >
      <h3 className={styles.date}>{approachDate}</h3>
      <div className={styles.infoRow}>
        <DistanceBadge distance={distance} />
        <div className={styles.infoRow}>
          <AsteroidIcon size={diameter} />
          <div className={styles.nameInfo}>
            <span className={styles.name}>{name}</span>
            <span className={styles.diameter}>&oslash; {diameter} м</span>
          </div>
        </div>
      </div>
      <CartControl
        asteroidId={id}
        isPurchased={isAddedToCart}
        isHazardous={isHazardous}
        onPurchaseAsteroid={onPurchaseAsteroid}
      />
    </div>
  );
};
export default AsteroidCard;
