import React, { FC, useEffect, useRef, TouchEvent } from 'react';
import cn from 'classnames';
import { ArrowButton } from '../UI/Buttons/ArrowButton';
import { playAnimation } from './utils';
import { Direct } from '../../types';
import styles from './styles.module.scss';

const NON_APPLICABLE_SHIFT_Y = 120;

const Slider: FC<{ imgData: string[], className?: string }> = ({ imgData, className }) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const pointerRef = useRef<HTMLUListElement>(null);

  const { current: sliderData }: {
    current: {
      index: number;
      firstTouch: boolean;
      isSlide: boolean;
      touchEvents: {
        startX: number;
        startY: number;
      }
    }
  } = useRef({
    index: 0,
    firstTouch: true,
    isSlide: false,
    touchEvents: { startX: 0, startY: 0 }
  });

  const setCurrentIndex = (direct: Direct) => {
    if (direct === Direct.next) {
      sliderData.index = getNextIndex();
    } else {
      sliderData.index = getPrevIndex();
    }
  };

  const getNextIndex = (): number => (sliderData.index + 1) % imgData.length;
  const getPrevIndex = (): number => {
    if (sliderData.index === 0) {
      return imgData.length - 1;
    } else {
      return sliderData.index - 1;
    }
  };

  const setNextState = (direct: Direct) => {
    setSlidesStyles(true);
    setCurrentIndex(direct);
    setSlidesStyles(false);
    sliderRef.current!.style.transform = `translateX(0px)`;
  };

  const touchHandler = (e: TouchEvent<HTMLUListElement>, isStart: boolean) => {
    if (isStart) {
      sliderData.firstTouch = true;
      sliderData.touchEvents.startX = e.nativeEvent.changedTouches[0].clientX;
      sliderData.touchEvents.startY = e.nativeEvent.changedTouches[0].clientY;
    } else {
      document.body.style.overflow = '';
      const endX = e.nativeEvent.changedTouches[0].clientX;
      const endY = e.nativeEvent.changedTouches[0].clientY;
      const shiftX = endX - sliderData.touchEvents.startX;
      const shiftY = endY - sliderData.touchEvents.startY;

      if (shiftX === 0) return;

      if (Math.abs(shiftY) > NON_APPLICABLE_SHIFT_Y) {
        onPlayAnimation({ shiftX, reverse: true });
        return;
      }

      onPlayAnimation({ shiftX, reverse: false });
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    const startPositionX = sliderData.touchEvents.startX;
    const startPositionY = sliderData.touchEvents.startY;

    const currentPositionX = e.nativeEvent.changedTouches[0].clientX;
    const currentPositionY = e.nativeEvent.changedTouches[0].clientY;

    const shiftX = currentPositionX - startPositionX;
    const shiftY = Math.abs(currentPositionY - startPositionY);

    if (sliderData.firstTouch) {
      sliderData.isSlide = Math.abs(shiftX) > Math.abs(shiftY);
      sliderData.firstTouch = false;

      if (sliderData.isSlide) {
        document.body.style.overflow = 'hidden';
      }
    }

    if (sliderData.isSlide) {
      sliderRef.current!.style.transform = `translateX(${shiftX}px)`;
    }
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
    const index = sliderData.index;
    const prevIndex = getPrevIndex();
    const nextIndex = getNextIndex();

    const slides = sliderRef.current?.children as HTMLCollectionOf<HTMLElement>;
    const pointers = pointerRef.current?.children as HTMLCollectionOf<HTMLElement>;

    if (clear) {
      slides[index].style.visibility = '';
      slides[prevIndex].style.visibility = '';
      slides[nextIndex].style.visibility = '';
      pointers[index].style.backgroundColor = '';
      return;
    }

    slides[index].style.cssText = `${slides[index].style.cssText}; visibility: visible; left: 0`;
    slides[prevIndex].style.cssText = `${slides[prevIndex].style.cssText}; visibility: visible; left: -100%`;
    slides[nextIndex].style.cssText = `${slides[nextIndex].style.cssText}; visibility: visible; left: 100%`;
    pointers[index].style.backgroundColor = '#14d41a';
  };

  useEffect(() => {
    setSlidesStyles(false);
  });

  return (
    <>
      <ul
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
            <li
              key={index}
              className={styles.img}
              style={{
                backgroundImage: `url('${img}')`
              }}
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

export default Slider;
