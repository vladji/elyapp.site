import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(styles.cardWrapper, className)}>
      {children}
    </div>
  );
};
