import styles from './AsteroidsList.module.scss';
import { AsteroidsListHeader } from '../AsteroidsListHeader';
import { useEffect, useState } from 'react';
import { DistanceUnits } from '../../utils/types.ts';
import { DistanceUnitsContext } from '../../contexts';
import { useInfiniteAsteroids } from '../../hooks';
import { Spinner } from '../../shared';
import { AsteroidRow } from '../AsteroidRow';
import { useInView } from 'react-intersection-observer';

export interface AsteroidsListProps {
  onPurchaseAsteroid: (id: number) => void;
}

const AsteroidsList = ({ onPurchaseAsteroid }: AsteroidsListProps) => {
  const { data, isFetching, isError, fetchNextPage } = useInfiniteAsteroids();
  const { ref, inView } = useInView({ threshold: 0 });
  const [units, setUnits] = useState<DistanceUnits>('km');
  const asteroidsList = data ? data.pages.flatMap(item => item.data) : [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <DistanceUnitsContext.Provider value={units}>
      <div className={styles.listContainer}>
        <AsteroidsListHeader onSelectUnits={setUnits} />
        <ul className={styles.list}>
          {asteroidsList.length !== 0 &&
            asteroidsList.map(item => (
              <AsteroidRow
                key={item.id}
                asteroidData={item}
                onPurchaseAsteroid={onPurchaseAsteroid}
              />
            ))}
          <div ref={ref}></div>
          {isFetching ? (
            <div className={styles.spinnerWrapper}>
              <Spinner />
            </div>
          ) : null}
          {isError ? (
            <span>Произошла ошибка, перезагрузите страницу</span>
          ) : null}
        </ul>
      </div>
    </DistanceUnitsContext.Provider>
  );
};

export default AsteroidsList;
