import styles from './Slider.module.scss';

export interface SliderProps {
  isChecked: boolean;
  onChange: () => void;
}

const Slider = ({ isChecked, onChange }: SliderProps) => (
  <label className={styles.switch}>
    <input type="checkbox" checked={isChecked} onChange={onChange} />
    <span className={styles.slider} />
  </label>
);

export default Slider;
