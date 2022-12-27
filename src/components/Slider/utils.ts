import { RefObject } from 'react';
import { Direct } from '../../types';

interface IPlayAnimation {
  stopPosition: number;
  shiftX: number;
  startTime: number;
  reverse: boolean;
  sliderRef: RefObject<HTMLUListElement>;
  setNextState: (direct: Direct) => void;
}

type PlayAnimation = (arg: IPlayAnimation) => void

const INTERVAL = 250;
const REVERSE_INTERVAL = 100;
let requestID: number;

export const playAnimation: PlayAnimation = ({
  stopPosition,
  shiftX,
  startTime,
  reverse,
  sliderRef,
  setNextState,
}) => {
  const timeNow = Date.now();
  const interval = timeNow - startTime;
  const part = reverse ? REVERSE_INTERVAL / interval : INTERVAL / interval;

  const absShift = reverse ? Math.abs(shiftX) : Math.abs(stopPosition - shiftX);
  const value = absShift / part;

  let nextStep: number;
  if (reverse) {
    nextStep = shiftX > 0 ? shiftX - value : shiftX + value;
  } else {
    nextStep = shiftX > 0 ? shiftX + value : shiftX - value;
  }

  if (reverse) {
    if ((shiftX > 0 && nextStep <= 0) || (shiftX < 0 && nextStep >= 0)) {
      cancelAnimationFrame(requestID);
      return;
    }
  }

  if (!reverse && Math.abs(nextStep) >= Math.abs(stopPosition)) {
    cancelAnimationFrame(requestID);
    sliderRef.current!.style.transform = `translateX(${stopPosition}px)`;

    const direct = shiftX > 0 ? Direct.prev : Direct.next;
    setNextState(direct);
    return;
  }

  sliderRef.current!.style.transform = `translateX(${nextStep}px)`;
  requestID = requestAnimationFrame(() => playAnimation({
    stopPosition, shiftX, startTime, reverse, sliderRef, setNextState
  }));
};
