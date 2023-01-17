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
            {/*<span className={styles.textP1}>{useLang('about.text.p1')}</span>*/}
            <span>{useLang('about.text.p1')}</span>
            <span className={styles.boldText}>{useLang('about.text.p2')}</span>
            <span>{useLang('about.text.p3')}</span>

            {/*<span className={styles.textP3}>{useLang('about.text.p3')}</span>*/}
            {/*{useLang('about.text.p4')}*/}
          </p>
          <img className={styles.moodImage} src={img} alt="Elya" width="210" height="315" />
        </div>
      </Card>
    </section>
  );
};
