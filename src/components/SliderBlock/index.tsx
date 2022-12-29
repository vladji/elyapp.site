import { FC } from 'react';
import { Card } from '../Card';
import Slider from '../Slider';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

interface SliderBlockProps {
  imgData: string[];
  title: string;
  className?: string;
  sliderClassName?: string;
}

export const SliderBlock: FC<SliderBlockProps> = ({
  imgData,
  title,
  className,
  sliderClassName,
}) => {
  return (
    <section className={className}>
      <Card className={styles.card}>
        <h2 className={styles.title}>{useLang(title)}</h2>
        <Slider className={sliderClassName} imgData={imgData} />
      </Card>
    </section>
  );
};
