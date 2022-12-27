import React, { FC, useEffect, useRef, TouchEvent } from 'react';
import cn from 'classnames';
import { ArrowButton } from '../UI/Buttons/ArrowButton';
import { playAnimation } from './utils';
import { Direct } from '../../types';
import styles from './styles.module.scss';

const NON_APPLICABLE_SHIFT_Y = 150;
const NON_APPLICABLE_SHIFT_X = 110;

export const Slider: FC<{ imgData: string[], className?: string }> = ({ imgData, className }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLUListElement>(null);
  const { current: currentIndex } = useRef({ index: 0 });
  const { current: touchEvents } = useRef({
    startX: 0,
    startY: 0,
  });

  const setCurrentIndex = (direct: Direct) => {
    if (direct === Direct.next) {
      currentIndex.index = getNextIndex();
    } else {
      currentIndex.index = getPrevIndex();
    }
  };

  const getNextIndex = (): number => (currentIndex.index + 1) % imgData.length;
  const getPrevIndex = (): number => {
    if (currentIndex.index === 0) {
      return imgData.length - 1;
    } else {
      return currentIndex.index - 1;
    }
  };

  const setNextState = (direct: Direct) => {
    setSlidesStyles(true);
    setCurrentIndex(direct);
    setSlidesStyles(false);
    sliderRef.current!.style.transform = `translateX(0px)`;
  };

  const touchHandler = (e: TouchEvent<HTMLDivElement>, isStart: boolean) => {
    if (isStart) {
      document.body.style.overflowY = 'hidden';
      touchEvents.startX = e.changedTouches[0].clientX;
      touchEvents.startY = e.changedTouches[0].clientY;
    } else {
      document.body.style.overflowY = '';
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const shiftX = endX - touchEvents.startX;
      const shiftY = endY - touchEvents.startY;

      if (shiftX === 0) return;

      if (Math.abs(shiftY) > NON_APPLICABLE_SHIFT_Y) {
        onPlayAnimation({ shiftX, reverse: true });
        return;
      }

      if (Math.abs(shiftX) < NON_APPLICABLE_SHIFT_X) {
        onPlayAnimation({ shiftX, reverse: true });
        return;
      }

      onPlayAnimation({ shiftX, reverse: false });
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const startPositionX = touchEvents.startX;
    const startPositionY = touchEvents.startY;

    const currentPositionX = e.changedTouches[0].clientX;
    const currentPositionY = e.changedTouches[0].clientY;

    const shiftX: number = currentPositionX - startPositionX;
    const shiftY: number = Math.abs(currentPositionY - startPositionY);

    if (shiftY > NON_APPLICABLE_SHIFT_Y) {
      document.body.style.overflowY = '';
    }

    sliderRef.current!.style.transform = `translateX(${shiftX}px)`;
  };

  const onPlayAnimation = ({
    shiftX,
    reverse,
  }: {
    shiftX: number;
    reverse: boolean;
  }): void => {
    const startTime: number = Date.now();
    const sliderWidth: number = sliderRef.current!.offsetWidth;
    const stopPosition: number = shiftX < 0 ? -sliderWidth : sliderWidth;

    requestAnimationFrame(() => playAnimation({
      stopPosition,
      shiftX,
      startTime,
      reverse,
      sliderRef,
      setNextState,
    }));
  };


  const setSlidesStyles = (clear: boolean) => {
    const index = currentIndex.index;
    const prevIndex = getPrevIndex();
    const nextIndex = getNextIndex();

    const slides = sliderRef.current?.children as HTMLCollectionOf<HTMLElement>;
    const pointers = pointerRef.current?.children as HTMLCollectionOf<HTMLElement>;

    if (clear) {
      slides[index].style.display = '';
      slides[prevIndex].style.display = '';
      slides[nextIndex].style.display = '';
      pointers[index].style.backgroundColor = '';
      return;
    }

    slides[index].style.cssText = `${slides[index].style.cssText}; display: block; left: 0`;
    slides[prevIndex].style.cssText = `${slides[prevIndex].style.cssText}; display: block; left: -100%`;
    slides[nextIndex].style.cssText = `${slides[nextIndex].style.cssText}; display: block; left: 100%`;
    pointers[index].style.backgroundColor = '#14d41a';
  };

  useEffect(() => {
    setSlidesStyles(false);
  });

  return (
    <>
      <div
        ref={sliderRef}
        onTouchStart={(e) => touchHandler(e, true)}
        onTouchEnd={(e) => touchHandler(e, false)}
        onTouchMove={onTouchMove}
        className={cn(
          styles.sliderWrapper,
          className
        )}
      >
        {imgData.map((img, index) => {
          return (
            <div
              key={index}
              className={styles.img}
              style={{
                backgroundImage: `url('${img}')`
              }}
            />
          );
        })}
      </div>
      <div className={styles.controlsWrapper}>
        <ArrowButton
          className={cn(
            styles.arrowButtonLeft,
            styles.arrowButton,
          )}
          onClick={() => onPlayAnimation({ shiftX: 1, reverse: false })}
        />
        <ul
          ref={pointerRef}
          className={styles.slidePointerWrapper}
        >
          {imgData.map((_, index) => (
            <li
              key={index}
              className={styles.slidePointer}
            />
          ))}
        </ul>
        <ArrowButton
          className={styles.arrowButton}
          onClick={() => onPlayAnimation({ shiftX: -1, reverse: false })}
        />
      </div>
    </>
  );
};
