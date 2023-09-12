import styles from './ListHeader.module.scss';
import { useContext } from 'react';
import { DistanceUnitsContext } from '../../contexts';
import { DistanceUnits } from '../../utils/types.ts';

export interface ListHeaderProps {
  title: string;
  onSelectUnits: (units: DistanceUnits) => void;
}

const ListHeader = ({ title, onSelectUnits }: ListHeaderProps) => {
  const units = useContext(DistanceUnitsContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <button
        type="button"
        className={`${styles.button} ${units === 'km' ? styles.isActive : ''}`}
        onClick={() => onSelectUnits('km')}
      >
        в километрах
      </button>{' '}
      |{' '}
      <button
        type="button"
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

export default ListHeader;
