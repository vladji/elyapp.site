import { FC, lazy, Suspense } from 'react';
import { Card } from '../Card';
import { Fallback } from '../Slider/Fallback';
import { useIntersection } from '../../hooks/useIntersection';
import { useLang } from '../../hooks/useLang';

import img1 from '../../assets/slider/testimonials/IMG_2003.webp';
import img2 from '../../assets/slider/testimonials/IMG_2004.webp';
import img3 from '../../assets/slider/testimonials/IMG_2005.webp';
import img4 from '../../assets/slider/testimonials/IMG_2006.webp';
import img6 from '../../assets/slider/testimonials/IMG_2008.webp';
import img7 from '../../assets/slider/testimonials/IMG_2009.webp';
import img8 from '../../assets/slider/testimonials/IMG_2010.webp';
import img9 from '../../assets/slider/testimonials/IMG_2011.webp';
import img10 from '../../assets/slider/testimonials/IMG_2012.webp';
import img11 from '../../assets/slider/testimonials/IMG_2013.webp';
import img12 from '../../assets/slider/testimonials/IMG_2014.webp';
import img13 from '../../assets/slider/testimonials/IMG_2015.webp';
import img14 from '../../assets/slider/testimonials/IMG_2016.webp';
import img15 from '../../assets/slider/testimonials/IMG_2017.webp';
import img16 from '../../assets/slider/testimonials/IMG_2018.webp';
import img17 from '../../assets/slider/testimonials/IMG_2019.webp';
import img18 from '../../assets/slider/testimonials/IMG_2020.webp';
import img19 from '../../assets/slider/testimonials/IMG_2021.webp';
import img20 from '../../assets/slider/testimonials/IMG_2022.webp';
import img21 from '../../assets/slider/testimonials/IMG_2023.webp';

import styles from './styles.module.scss';

const Slider = lazy(() => import('../Slider'));

export const TestimonialsSlides: FC = () => {
  const { inView, ref } = useIntersection();
  const sliderTitle = useLang('testimonials.section');

  const imgData = [
    img3, img1, img2, img4, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18,
    img19, img20, img21
  ];
  return (
    <>
      <div ref={ref} />
      {inView &&
        <section>
          <Card className={styles.card}>
            <h2 className={styles.title}>{sliderTitle}</h2>
            <div className={styles.testimonialsSliderWrapper}>
              <Suspense fallback={<Fallback image={img3} className={styles.fallback} />}>
                <Slider imgData={imgData} />
              </Suspense>
            </div>
          </Card>
        </section>
      }
    </>
  );
};
