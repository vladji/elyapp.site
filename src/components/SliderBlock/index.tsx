import { FC } from 'react';
import { Card } from '../Card';
import Slider from '../Slider';
import { useLang } from '../../hooks/useLang';
import { useIntersection } from '../../hooks/useIntersection';
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
  const { inView, ref } = useIntersection();
  const sliderTitle = useLang(title);

  return (
    <>
      <div ref={ref} />
      {inView &&
        <section className={className}>
          <Card className={styles.card}>
            <h2 className={styles.title}>{sliderTitle}</h2>
            <Slider className={sliderClassName} imgData={imgData} />
          </Card>
        </section>
      }
    </>
  );
};
