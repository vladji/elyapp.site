import { FC } from 'react';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';
import img from '../../assets/images/elya-about.webp';
import styles from './styles.module.scss';

export const About: FC = () => {
  return (
    <section>
      <Card className={styles.card}>
        <h2 className={styles.title}>{useLang('about.title')}</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            {useLang('about.text.p1')}<br />
            {useLang('about.text.p2')}
          </p>
          <img className={styles.moodImage} src={img} alt="Elya" width="210" height="315" />
        </div>
      </Card>
    </section>
  );
};
