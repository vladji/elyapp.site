import { FC } from 'react';
import { Card } from '../Card';
import img from '../../assets/images/elya-intro.jpg';
import { useLang } from '../../hooks/useLang';

import styles from './styles.module.scss';

export const Intro: FC = () => {
  return (
    <section>
      <Card className={styles.card}>
        <div className={styles.introHead}>
          <img src={img} alt="Elya" />
          <div className={styles.introHeadCardWrapper}>
            <Card className={styles.introHeadCard}>
              <span className={styles.introHeadTextFirst}>{useLang('intro.project.sub')}</span>
              <span className={styles.introHeadTextSecond}>
                <span className={styles.introHeadTextSecondEmphasis}>
                  {useLang('intro.project')}&nbsp;
                </span>
                {useLang('intro.author')}
              </span>
              <span className={styles.introHeadTextThird}>{useLang('intro.course.sub')}</span>
              <span className={styles.introHeadTextFourth}>{useLang('intro.course').toUpperCase()}</span>
            </Card>
          </div>
        </div>
        <p className={styles.introText}>
          {useLang('intro.text')}
        </p>
      </Card>
    </section>
  );
};
