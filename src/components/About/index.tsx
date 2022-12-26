import { FC } from 'react';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';
import img from '../../assets/images/elya-about.png';
import styles from './styles.module.scss';

export const About: FC = () => {
  return (
    <section>
      <Card>
        <h2>{useLang('about.section')}</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.aboutTextIntro}>
              {useLang('about.text.p1')}<br />
              {useLang('about.text.p2')}<br />
              {useLang('about.text.p3')}
            </p>
            <p className={styles.aboutTextContinuing}>
              {useLang('about.text.p4')}<br />
              {useLang('about.text.p5')}
            </p>
          </div>
          <img src={img} alt="Elya" />
        </div>
      </Card>
    </section>
  );
};
