import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { ArrowButton } from '../UI/Buttons/ArrowButton';
import { Direct } from '../../types';
import styles from './styles.module.scss';

const NON_APPLICABLE_SHIFT = 35;

export const Slider: FC<{ imgData: string[], className?: string }> = ({ imgData, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direct, setDirect] = useState<Direct>(Direct.empty);

  const touchEvents = useRef({
    startX: 0,
    startY: 0,
  });

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
    document.body.style.overflowY = '';
  };

  const touchHandler = (e: React.TouchEvent<HTMLLIElement>, isStart: boolean) => {
    if (isStart) {
      document.body.style.overflowY = 'hidden';
      touchEvents.current.startX = e.changedTouches[0].clientX;
      touchEvents.current.startY = e.changedTouches[0].clientY;
    } else {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const shiftX = touchEvents.current.startX - endX;
      const shiftY = touchEvents.current.startY - endY;

      if (Math.abs(shiftX) < NON_APPLICABLE_SHIFT || Math.abs(shiftY) > NON_APPLICABLE_SHIFT) {
        return;
      } else {
        shiftX > 0 ? startAnimation(Direct.toRight) : startAnimation(Direct.toLeft);
      }
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLLIElement>) => {
    const startPositionY = touchEvents.current.startY;
    const currentPositionY = e.changedTouches[0].clientY;
    const shiftY = Math.abs(currentPositionY - startPositionY);
    if (shiftY > NON_APPLICABLE_SHIFT) {
      document.body.style.overflowY = '';
    }
  };

  return (
    <>
      <ul
        onAnimationEnd={setNextState}
        className={cn(
          styles.sliderWrapper,
          { [styles.toLeft]: direct === Direct.toLeft },
          { [styles.toRight]: direct === Direct.toRight },
          className
        )}
      >
        {imgData.map((img, index) => {
          return (
            <li
              key={index}
              onTouchStart={(e) => touchHandler(e, true)}
              onTouchEnd={(e) => touchHandler(e, false)}
              onTouchMove={onTouchMove}
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
          className={cn(
            styles.arrowButtonLeft,
            styles.arrowButton,
          )}
          onClick={() => startAnimation(Direct.toLeft)}
        />
        <ul className={styles.slidePointerWrapper}>
          {imgData.map((_, index) => (
            <li
              key={index}
              className={cn(
                styles.slidePointer,
                { [styles.active]: index === currentIndex }
              )}
            />
          ))}
        </ul>
        <ArrowButton
          className={styles.arrowButton}
          onClick={() => startAnimation(Direct.toRight)}
        />
      </div>
    </>
  );
};
