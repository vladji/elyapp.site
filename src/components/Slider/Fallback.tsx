import { FC } from 'react';
import cn from 'classnames';
import { Spinner } from '../UI/Spinner';
import styles from './styles.module.scss';

export const Fallback: FC<{ image: any, className?: string }> = ({ image, className }) => {
  return (
    <div className={cn(styles.fallback, className)}>
      <Spinner />
      <img src={image} alt="slider image" />
    </div>
  );
};
