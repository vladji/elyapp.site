import { FC } from 'react';
import cn from 'classnames';
import { ArrowIcon } from '../../../icons/ArrowIcon';
import styles from './styles.module.scss';

interface ArrowButtonProps {
  className?: string;
  onClick: () => void;
}

export const ArrowButton: FC<ArrowButtonProps> = ({ className, onClick }) => {
  return (
    <button
      className={cn(styles.rootButton, styles.arrowButton, className)}
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
};
