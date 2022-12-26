import { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IconButtonProps {
  className?: string;
  children: JSX.Element;
  linkTo?: string;
}

export const IconButton: FC<IconButtonProps> = ({ className, children, linkTo }) => {
  return (
    <button
      className={cn(
        styles.rootButton,
        styles.iconButton,
        className,
      )}
    >
      <>
        {linkTo ?
          <a href={linkTo} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
          :
          <>{children}</>
        }
      </>
    </button>
  )
    ;
};
