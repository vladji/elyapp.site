import { FC } from 'react';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

export const PriceBlock: FC = () => {
  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <h3 className={styles.title}>{useLang('pricing.v1')}</h3>
        <p className={styles.priceDescription}>{useLang('pricing.v1.refinement')}</p>
        <div className={styles.priceWrapper}>
          <span className={styles.priceValue}>20 000</span>
          <span className={styles.priceSign}>&nbsp;{useLang('tenge')}</span>
        </div>
      </Card>
      <Card className={styles.card}>
        <h3 className={styles.title}>{useLang('pricing.v2')}</h3>
        <div className={styles.priceWrapper}>
          <span className={styles.priceValue}>100 000</span>
          <span className={styles.priceSign}>&nbsp;{useLang('tenge')}</span>
        </div>
      </Card>
    </section>
  );
};
