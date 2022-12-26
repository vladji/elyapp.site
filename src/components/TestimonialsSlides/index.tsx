import { FC } from 'react';
import { SliderBlock } from '../SliderBlock';
import img1 from '../../assets/slider/testimonials/IMG_2003.jpg';
import img2 from '../../assets/slider/testimonials/IMG_2004.jpg';
import img3 from '../../assets/slider/testimonials/IMG_2005.jpg';
import img4 from '../../assets/slider/testimonials/IMG_2006.jpg';
import img6 from '../../assets/slider/testimonials/IMG_2008.jpg';
import img7 from '../../assets/slider/testimonials/IMG_2009.jpg';
import img8 from '../../assets/slider/testimonials/IMG_2010.jpg';
import img9 from '../../assets/slider/testimonials/IMG_2011.jpg';
import img10 from '../../assets/slider/testimonials/IMG_2012.jpg';
import img11 from '../../assets/slider/testimonials/IMG_2013.jpg';
import img12 from '../../assets/slider/testimonials/IMG_2014.jpg';
import img13 from '../../assets/slider/testimonials/IMG_2015.jpg';
import img14 from '../../assets/slider/testimonials/IMG_2016.jpg';
import img15 from '../../assets/slider/testimonials/IMG_2017.jpg';
import img16 from '../../assets/slider/testimonials/IMG_2018.jpg';
import img17 from '../../assets/slider/testimonials/IMG_2019.jpg';
import img18 from '../../assets/slider/testimonials/IMG_2020.jpg';
import img19 from '../../assets/slider/testimonials/IMG_2021.jpg';
import img20 from '../../assets/slider/testimonials/IMG_2022.jpg';
import img21 from '../../assets/slider/testimonials/IMG_2023.jpg';
import styles from './styles.module.scss';

export const TestimonialsSlides: FC = () => {
  const imgData = [
    img1, img2, img3, img4, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18,
    img19, img20, img21
  ];
  return (
    <SliderBlock
      sliderClassName={styles.slider}
      imgData={imgData}
      title="testimonials.section"
    />
  );
};
