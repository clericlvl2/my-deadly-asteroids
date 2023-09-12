import styles from './DistanceBadge.module.scss';
import { useContext } from 'react';
import { DistanceUnitsContext } from '../../contexts';
import { unitsByDistanceUnits } from '../../utils/constants.ts';
import arrow from '../../assets/images/arrow.svg';
import { AstroDistance } from '../../utils/types.ts';

export interface DistanceBadgeProps {
  distance: AstroDistance;
}

const DistanceBadge = ({ distance }: DistanceBadgeProps) => {
  const units = useContext(DistanceUnitsContext);

  return (
    <div className={styles.distanceInfo}>
      <span className={styles.distance}>
        {distance[units]} {unitsByDistanceUnits[units]}
      </span>
      <img src={arrow} alt="Расстояние" />
    </div>
  );
};

export default DistanceBadge;
