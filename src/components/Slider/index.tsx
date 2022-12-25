import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { Card } from '../Card';
import { ArrowButton } from '../UI/Buttons/ArrowButton';
import img1 from '../../assets/slider/img.png';
import img2 from '../../assets/slider/img_1.png';
import img3 from '../../assets/slider/img_2.png';
import img4 from '../../assets/slider/img_3.png';
import { Direct } from '../../types';
import styles from './styles.module.scss';

export const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direct, setDirect] = useState<Direct>(Direct.empty);
  const touchEvents = useRef({
    startX: 0,
    startY: 0,
  });

  const imgData = [img1, img2, img3, img4];

  const prevSlideIndex = () => {
    if (currentIndex === 0) return imgData.length - 1;
    return currentIndex - 1;
  };
  const nextSlideIndex = () => (currentIndex + 1) % imgData.length;

  const setNextState = () => {
    if (direct === Direct.toLeft) {
      setCurrentIndex(prevSlideIndex());
    } else {
      setCurrentIndex(nextSlideIndex());
    }
    setDirect(Direct.empty);
  };

  const startAnimation = (direct: Direct) => {
    setDirect(direct);
  };

  const touchHandler = (e: React.TouchEvent<HTMLLIElement>, isStart: boolean) => {
    if (isStart) {
      touchEvents.current.startX = e.changedTouches[0].clientX;
      touchEvents.current.startY = e.changedTouches[0].clientY;
    } else {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const shiftX = touchEvents.current.startX - endX;
      const shiftY = touchEvents.current.startY - endY;

      if (Math.abs(shiftX) < 35 || Math.abs(shiftY) > 35) return;
      else {
        shiftX > 0 ? startAnimation(Direct.toRight) : startAnimation(Direct.toLeft);
      }
    }
  };

  return (
    <section>
      <Card className={styles.card}>
        <ul
          onAnimationEnd={setNextState}
          className={cn(
            styles.sliderWrapper,
            { [styles.toLeft]: direct === Direct.toLeft },
            { [styles.toRight]: direct === Direct.toRight }
          )}
        >
          {imgData.map((img, index) => {
            return (
              <li
                key={index}
                onTouchStart={(e) => touchHandler(e, true)}
                onTouchEnd={(e) => touchHandler(e, false)}
                style={{
                  backgroundImage: `url('${img}')`
                }}
                className={cn(
                  styles.img,
                  { [styles.currentImg]: index === currentIndex },
                  { [styles.prevImg]: index === prevSlideIndex() },
                  { [styles.nextImg]: index === nextSlideIndex() }
                )}
              />
            );
          })}
        </ul>
        <div className={styles.controlsWrapper}>
          <ArrowButton
            className={styles.arrowButtonLeft}
            onClick={() => startAnimation(Direct.toLeft)}
          />
          <ul className={styles.slidePointerWrapper}>
            {imgData.map((_, index) => (
              <li className={cn(styles.slidePointer, { [styles.active]: index === currentIndex })} />
            ))}
          </ul>
          <ArrowButton
            onClick={() => startAnimation(Direct.toRight)}
          />
        </div>
      </Card>
    </section>
  );
};
