import { FC } from 'react';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

export const ProductBlock: FC = () => {
  return (
    <section>
      <Card>
        <h2 className={styles.title}>{useLang('product.title')}</h2>
        <p className={styles.description}>{useLang('product.description')}</p>
        <h3 className={styles.subtitle}>{useLang('product.subtitle')}</h3>
        <ul className={styles.bulletsWrapper}>
          <li className={styles.bullet}>
            <span>-&nbsp;</span>
            <span>{useLang('product.bul1')}</span>
          </li>
          <li className={styles.bullet}>
            <span>-&nbsp;</span>
            <span>{useLang('product.bul2')}</span>
          </li>
          <li className={styles.bullet}>
            <span>-&nbsp;</span>
            <span>{useLang('product.bul3')}</span>
          </li>
          <li className={styles.bullet}>
            <span>-&nbsp;</span>
            <span>{useLang('product.bul4')}</span>
          </li>
        </ul>
        <div className={styles.priceWrapper}>
          <span className={styles.priceValue}>200 000</span>
          <span className={styles.priceSign}>&nbsp;{useLang('tenge')}</span>
        </div>
      </Card>
    </section>
  );
};
