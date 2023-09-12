import styles from './AsteroidDetails.module.scss';
import { useAsteroidDetails } from '../../hooks';
import { useParams } from 'react-router-dom';
import { CartControl } from '../CartControl';
import { DistanceUnits } from '../../utils/types.ts';
import { ListHeader } from '../ListHeader';
import { useContext } from 'react';
import { CartAsteroidsIdsContext } from '../../contexts';
import { Spinner } from '../../shared';
import { getApproachDate } from '../../utils/helpers.ts';
import ApproachCard from '../ApproachCard/ApproachCard.tsx';

export interface AsteroidDetailsProps {
  onPurchaseAsteroid: (id: string) => void;
  onSelectUnits: (units: DistanceUnits) => void;
}

const AsteroidDetails = ({
  onPurchaseAsteroid,
  onSelectUnits,
}: AsteroidDetailsProps) => {
  const { id } = useParams();
  const cartAsteroidsIds = useContext(CartAsteroidsIdsContext);
  const { data, isFetching, isError } = useAsteroidDetails(id);

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Произошла ошибка. Обновите страницу.</span>;
  }

  if (data !== undefined) {
    const {
      id: asteroidId,
      designation: name,
      estimated_diameter: sizeData,
      is_potentially_hazardous_asteroid: isHazardous,
      close_approach_data: approachesList,
      orbital_data: orbitalData,
    } = data;

    const discoveryDate = getApproachDate(orbitalData.first_observation_date);
    const minDiameter = Math.round(sizeData.meters.estimated_diameter_min);
    const isPurchased = cartAsteroidsIds.includes(asteroidId);

    return (
      <div>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.parameter}>Открыт {discoveryDate}</span>
          <span className={styles.parameter}>&oslash; {minDiameter} м</span>
          <CartControl
            asteroidId={asteroidId}
            isPurchased={isPurchased}
            isHazardous={isHazardous}
            onPurchaseAsteroid={onPurchaseAsteroid}
          />
        </div>
        <ListHeader title="Cближения" onSelectUnits={onSelectUnits} />
        <ul className={styles.list}>
          {approachesList !== undefined &&
            approachesList.length > 0 &&
            approachesList.map((data, index) => (
              <li key={index}>
                <ApproachCard approachData={data} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
};

export default AsteroidDetails;
