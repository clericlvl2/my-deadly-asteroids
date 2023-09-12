import styles from './AsteroidsList.module.scss';
import { ListHeader } from '../ListHeader';
import { useEffect } from 'react';
import { DistanceUnits } from '../../utils/types.ts';
import { useInfiniteAsteroidsInfo } from '../../hooks';
import { Spinner } from '../../shared';
import { AsteroidCard } from '../AsteroidCard';
import { useInView } from 'react-intersection-observer';

export interface AsteroidsListProps {
  onPurchaseAsteroid: (id: string) => void;
  onSelectUnits: (units: DistanceUnits) => void;
}

const AsteroidsList = ({
  onPurchaseAsteroid,
  onSelectUnits,
}: AsteroidsListProps) => {
  const { data, isFetching, isError, fetchNextPage } =
    useInfiniteAsteroidsInfo();
  const { ref, inView } = useInView({ threshold: 0 });
  const asteroidsList = data ? data.pages.flatMap(item => item.data) : [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className={styles.listContainer}>
      <ListHeader
        title="Ближайшие подлёты астероидов"
        onSelectUnits={onSelectUnits}
      />
      <ul className={styles.list}>
        {asteroidsList.length !== 0 &&
          asteroidsList.map(item => (
            <li key={item.id}>
              <AsteroidCard
                asteroidData={item}
                onPurchaseAsteroid={onPurchaseAsteroid}
              />
            </li>
          ))}
        <div ref={ref}></div>
        {isFetching ? (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        ) : null}
        {isError ? <span>Произошла ошибка, перезагрузите страницу</span> : null}
      </ul>
    </div>
  );
};

export default AsteroidsList;
