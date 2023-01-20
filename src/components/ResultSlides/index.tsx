import { FC, lazy, Suspense } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { Fallback } from '../Slider/Fallback';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';

import img1 from '../../assets/slider/results/IMG_1983.webp';
import img2 from '../../assets/slider/results/IMG_1984.webp';
import img3 from '../../assets/slider/results/IMG_1985.webp';
import img4 from '../../assets/slider/results/IMG_1987.webp';
import img5 from '../../assets/slider/results/IMG_1988.webp';
import img6 from '../../assets/slider/results/IMG_1989.webp';
import img7 from '../../assets/slider/results/IMG_1990.webp';
import img8 from '../../assets/slider/results/IMG_1991.webp';
import img9 from '../../assets/slider/results/IMG_1992.webp';
import img10 from '../../assets/slider/results/IMG_1993.webp';
import img11 from '../../assets/slider/results/IMG_1994.webp';
import img12 from '../../assets/slider/results/IMG_1995.webp';
import img13 from '../../assets/slider/results/IMG_1996.webp';
import img14 from '../../assets/slider/results/IMG_1997.webp';
import img15 from '../../assets/slider/results/IMG_1998.webp';
import img16 from '../../assets/slider/results/IMG_2001.webp';
import img17 from '../../assets/slider/results/IMG_2002.webp';

import styles from './styles.module.scss';

const Slider = lazy(() => import('../Slider'));

export const ResultSlides: FC = () => {
  const { inView, ref } = useIntersection();
  const sliderTitle = useLang('results.section');

  const imgData = [
    img16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img17
  ];

  return (
    <>
      <div ref={ref} />
      {inView &&
        <section>
          <Card className={styles.card}>
            <h2 className={styles.title}>{sliderTitle}</h2>
            <div className={styles.resultSliderWrapper}>
              <Suspense fallback={<Fallback image={img16} className={styles.fallback} />}>
                <Slider imgData={imgData} />
              </Suspense>
            </div>
          </Card>
        </section>
      }
    </>
  );
};
