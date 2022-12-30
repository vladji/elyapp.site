import React, { FC, TouchEvent, useRef } from 'react';
import cn from 'classnames';
import { ArrowButton } from '../UI/Buttons/ArrowButton';
import { playAnimation } from './utils';
import { Direct, Visibility } from '../../types';
import styles from './styles.module.scss';

const NON_APPLICABLE_SHIFT_Y = 120;
const NON_APPLICABLE_SHIFT_X = 30;

const Slider: FC<{ imgData: string[], className?: string }> = ({ imgData, className }) => {
    const sliderRef = useRef<HTMLUListElement>(null);
    const pointerRef = useRef<HTMLUListElement>(null);

    const { current: sliderData }: {
      current: {
        index: number;
        firstTouch: boolean;
        isSlide: boolean;
        direct: Direct;
        touchEvents: {
          startX: number;
          startY: number;
        }
      }
    } = useRef({
      index: 0,
      firstTouch: true,
      isSlide: false,
      direct: Direct.next,
      touchEvents: { startX: 0, startY: 0 }
    });

    const setCurrentIndex = (direct: Direct) => {
      if (direct === Direct.next) {
        sliderData.index = getNextIndex(sliderData.index);
      } else {
        sliderData.index = getPrevIndex(sliderData.index);
      }
    };

    const getNextIndex = (index: number): number => (index + 1) % imgData.length;
    const getPrevIndex = (index: number): number => {
      if (index === 0) {
        return imgData.length - 1;
      } else {
        return index - 1;
      }
    };

    const setNextState = () => {
      setCurrentIndex(sliderData.direct);
      setSlidesStyles(sliderData.direct);
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

        if (Math.abs(shiftY) > NON_APPLICABLE_SHIFT_Y || Math.abs(shiftX) <= NON_APPLICABLE_SHIFT_X) {
          onPlayAnimation({ shiftX, reverse: true });
          return;
        }

        sliderData.direct = shiftX > 0 ? Direct.prev : Direct.next;
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

    const setSlidesStyles = (direct: Direct) => {

      const slides = sliderRef.current?.children as HTMLCollectionOf<HTMLElement>;
      const pointers = pointerRef.current?.children as HTMLCollectionOf<HTMLElement>;

      if (direct === Direct.next) {
        const nextIndex = getNextIndex(sliderData.index);
        const prevIndex = getPrevIndex(sliderData.index);
        const outIndex = getPrevIndex(prevIndex);

        slides[prevIndex].style.left = '-100%';
        slides[sliderData.index].style.left = '0';
        slides[nextIndex].style.left = '100%';
        slides[nextIndex].style.visibility = Visibility.visible;
        slides[outIndex].style.visibility = Visibility.hidden;

        pointers[sliderData.index].style.backgroundColor = '#14d41a';
        pointers[prevIndex].style.backgroundColor = '#ccc';
      }

      if (direct === Direct.prev) {
        const nextIndex = getNextIndex(sliderData.index);
        const prevIndex = getPrevIndex(sliderData.index);
        const outIndex = getNextIndex(nextIndex);

        slides[prevIndex].style.left = '-100%';
        slides[prevIndex].style.visibility = Visibility.visible;
        slides[sliderData.index].style.left = '0';
        slides[nextIndex].style.left = '100%';
        slides[outIndex].style.visibility = Visibility.hidden;

        pointers[sliderData.index].style.backgroundColor = '#14d41a';
        pointers[nextIndex].style.backgroundColor = '#ccc';
      }
    };

    const setInitialSlides = (index: number): {
      visibility: Visibility;
      left: number;
    } => {
      if (index === sliderData.index) {
        return {
          visibility: Visibility.visible,
          left: 0,
        };
      }
      if (index === getPrevIndex(sliderData.index)) {
        return {
          visibility: Visibility.visible,
          left: -100,
        };
      }
      if (index === getNextIndex(sliderData.index)) {
        return {
          visibility: Visibility.visible,
          left: 100,
        };
      }
      return {
        visibility: Visibility.hidden,
        left: 0,
      };
    };

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
                  backgroundImage: `url('${img}')`,
                  visibility: `${setInitialSlides(index).visibility}`,
                  left: `${setInitialSlides(index).left}%`
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
                style={{
                  backgroundColor: `${index === sliderData.index ? '#14d41a' : '#ccc'}`
                }}
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
  }
;

export default Slider;
