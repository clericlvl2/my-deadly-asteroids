import styles from './AsteroidIcon.module.scss';
import asteroidImage from '../../assets/images/asteroid-small.png';

export interface AsteroidIconProps {
  size: number;
}

const AsteroidIcon = ({ size }: AsteroidIconProps) => (
  <img
    className={`${styles.image} ${
      size > 300 ? styles.large : size > 100 ? styles.medium : styles.small
    }`}
    src={asteroidImage}
    alt="Астероид"
  />
);

export default AsteroidIcon;
