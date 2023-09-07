import styles from './AsteroidsListHeader.module.scss';
import { useContext } from 'react';
import { DistanceUnitsContext } from '../../contexts';
import { DistanceUnits } from '../../utils/types.ts';

export interface AsteroidsListHeaderProps {
  onSelectUnits: (units: DistanceUnits) => void;
}

const AsteroidsListHeader = ({ onSelectUnits }: AsteroidsListHeaderProps) => {
  const units = useContext(DistanceUnitsContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <button
        className={`${styles.button} ${units === 'km' ? styles.isActive : ''}`}
        onClick={() => onSelectUnits('km')}
      >
        в километрах
      </button>{' '}
      |{' '}
      <button
        className={`${styles.button} ${
          units === 'lunar' ? styles.isActive : ''
        }`}
        onClick={() => onSelectUnits('lunar')}
      >
        в лунных орбитах
      </button>
    </div>
  );
};

export default AsteroidsListHeader;
