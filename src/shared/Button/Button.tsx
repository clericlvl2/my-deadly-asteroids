import styles from './Button.module.scss';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  size?: 'large' | 'medium';
  theme?: 'primary' | 'accent';
  className?: string;
  onClick: MouseEventHandler;
}

const Button = ({
  text,
  size = 'large',
  theme = 'primary',
  className = '',
  isDisabled,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    disabled={isDisabled}
    className={`${styles.button} ${styles[size]} ${
      styles[theme]
    } ${className} ${isDisabled ? styles.disabled : ''}
    `}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
