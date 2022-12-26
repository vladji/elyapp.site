import { FC } from 'react';
import { SliderBlock } from '../SliderBlock';
import img1 from '../../assets/slider/results/IMG_1983.jpg';
import img2 from '../../assets/slider/results/IMG_1984.jpg';
import img3 from '../../assets/slider/results/IMG_1985.jpg';
import img4 from '../../assets/slider/results/IMG_1987.jpg';
import img5 from '../../assets/slider/results/IMG_1988.jpg';
import img6 from '../../assets/slider/results/IMG_1989.jpg';
import img7 from '../../assets/slider/results/IMG_1990.jpg';
import img8 from '../../assets/slider/results/IMG_1991.jpg';
import img9 from '../../assets/slider/results/IMG_1992.jpg';
import img10 from '../../assets/slider/results/IMG_1993.jpg';
import img11 from '../../assets/slider/results/IMG_1994.jpg';
import img12 from '../../assets/slider/results/IMG_1995.jpg';
import img13 from '../../assets/slider/results/IMG_1996.jpg';
import img14 from '../../assets/slider/results/IMG_1997.jpg';
import img15 from '../../assets/slider/results/IMG_1998.jpg';
import img16 from '../../assets/slider/results/IMG_2001.jpg';
import img17 from '../../assets/slider/results/IMG_2002.jpg';
import img18 from '../../assets/slider/results/IMG_1997.jpg';

export const ResultSlides: FC = () => {
  const imgData = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18
  ];
  return (
    <SliderBlock imgData={imgData} title="results.section" />
  );
};
