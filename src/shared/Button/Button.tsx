import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  size?: 'large' | 'medium';
  theme?: 'primary' | 'accent';
  onClick: () => void;
}

const Button = ({
  text,
  size = 'large',
  theme = 'primary',
  onClick,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${styles[size]} ${styles[theme]}`}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
