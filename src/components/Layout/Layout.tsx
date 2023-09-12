import styles from './Layout.module.scss';
import { CartWidget } from '../CartWidget';
import { ReactNode } from 'react';

export interface LayoutProps {
  content: ReactNode;
  srcImage?: string;
  alt?: string;
  onModalOpen: () => void;
}

const Layout = ({ content, srcImage, alt, onModalOpen }: LayoutProps) => {
  return (
    <main className={styles.main}>
      <img className={styles.image} src={srcImage} alt={alt} />
      <div className={styles.listWrapper}>{content}</div>
      <div className={styles.cartWrapper}>
        <CartWidget onModalOpen={onModalOpen} />
      </div>
    </main>
  );
};

export default Layout;
