import { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface RoundButtonProps {
  children: string | JSX.Element;
}

export const RoundButton: FC<RoundButtonProps> = ({ children }) => {
  return (
    <button className={cn(styles.rootButton, styles.roundButton)}>
      {children}
    </button>
  );
};
