import { Card } from '../Card';
import img from '../../assets/images/elya-face-pic.png';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

export const IntroOld = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <img className={styles.introImg} src={img} alt="Elya" />
          <Card className={styles.card}>
            <span>{useLang('intro.online.project')}</span>
            <span>{useLang('intro.body.in.head')}</span>
            <span>{useLang('intro.complex.approach')}</span>
            <span>{useLang('intro.pump.body')}</span>
          </Card>
        </div>
      </section>
    </div>
  );
};
