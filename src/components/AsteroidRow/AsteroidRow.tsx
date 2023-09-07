import styles from './AsteroidRow.module.scss';
import asteroidImage from '../../assets/images/asteroid-image.png';
import arrow from '../../assets/images/arrow.svg';
import { Button } from '../../shared';
import { AsteroidsInfoRaw } from '../../utils/types.ts';
import {
  getApproachDate,
  getDiameter,
  getDistance,
} from '../../utils/helpers.ts';
import { useContext } from 'react';
import { CartAsteroidsIdsContext, DistanceUnitsContext } from '../../contexts';
import { unitsByDistanceUnits } from '../../utils/constants.ts';

export interface AsteroidRowProps {
  asteroidData: AsteroidsInfoRaw;
  onPurchaseAsteroid: (id: number) => void;
}

const AsteroidRow = ({
  asteroidData,
  onPurchaseAsteroid,
}: AsteroidRowProps) => {
  const units = useContext(DistanceUnitsContext);
  const cartAsteroidsIds = useContext(CartAsteroidsIdsContext);

  const {
    id,
    name,
    is_potentially_hazardous_asteroid: isHazardous,
    estimated_diameter: sizeData,
    close_approach_data: approachData,
  } = asteroidData;
  const approachDate = getApproachDate(approachData[0].close_approach_date);
  const diameter = getDiameter(sizeData.meters.estimated_diameter_min);
  const distance = getDistance(approachData[0].miss_distance);
  const isAddedToCart = cartAsteroidsIds.includes(id);

  return (
    <li className={styles.container}>
      <h3 className={styles.date}>{approachDate}</h3>
      <div className={styles.infoRow}>
        <div className={styles.distanceInfo}>
          <span className={styles.distance}>
            {distance[units]} {unitsByDistanceUnits[units]}
          </span>
          {/* TODO это не картинка */}
          <img src={arrow} alt="Расстояние" />
        </div>
        <div className={styles.infoRow}>
          <img
            className={`${styles.image} ${
              parseInt(diameter) > 100 ? styles.large : ''
            }`}
            src={asteroidImage}
            alt="Астероид"
          />
          <div className={styles.nameInfo}>
            <span className={styles.name}>{name}</span>
            <span className={styles.diameter}>&oslash; {diameter} м</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <Button
          text={isAddedToCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          size="medium"
          theme={isAddedToCart ? 'accent' : undefined}
          onClick={() => onPurchaseAsteroid(id)}
        />
        {isHazardous ? (
          <span className={styles.warning}>
            <span>&#9888;&#65039;</span> Опасен
          </span>
        ) : null}
      </div>
    </li>
  );
};

export default AsteroidRow;
