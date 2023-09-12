import styles from './ApproachCard.module.scss';
import clockIcon from './../../assets/images/clock-icon.svg';
import { CloseApproachInfo } from '../../utils/types.ts';
import { DistanceBadge } from '../DistanceBadge';
import {
  getApproachDate,
  getApproachTime,
  getDistance,
} from '../../utils/helpers.ts';

export interface ApproachCardProps {
  approachData: CloseApproachInfo;
}

const ApproachCard = ({ approachData }: ApproachCardProps) => {
  const distance = getDistance(approachData.miss_distance);
  const date = getApproachDate(approachData.close_approach_date);
  const time = getApproachTime(approachData.close_approach_date_full);
  const velocity = parseInt(approachData.relative_velocity.kilometers_per_hour);

  return (
    <div className={styles.container}>
      <h3 className={styles.date}>{date}</h3>
      <div>
        <img className={styles.icon} src={clockIcon} alt="Иконка часов" />
        <span>{time}</span>
      </div>
      <DistanceBadge distance={distance} />
      <span>{velocity} км/ч</span>
      <span>Центр орбиты: "{approachData.orbiting_body}"</span>
    </div>
  );
};

export default ApproachCard;
