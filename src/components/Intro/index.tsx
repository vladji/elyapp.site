import { FC } from 'react';
import { Card } from '../Card';
import img from '../../assets/images/elya-intro-0.webp';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

export const Intro: FC = () => {
  return (
    <section className={styles.section}>
      <Card className={styles.sectionCard}>
        <div className={styles.contentWrapper}>
          <img className={styles.image} src={img} alt="Elya" width="300" height="289" />
          <div className={styles.cardWrapper}>
            <Card className={styles.card}>
              <span className={styles.projectTitle}>{useLang('intro.title')}</span>
              <span className={styles.projectName}>
                {useLang('intro.name')}&nbsp;
              </span>
              <span className={styles.projectSub}>{useLang('intro.sub').toUpperCase()}</span>
            </Card>
          </div>
        </div>
        <p className={styles.text}>
          {useLang('intro.text')}
        </p>
      </Card>
    </section>
  );
};
