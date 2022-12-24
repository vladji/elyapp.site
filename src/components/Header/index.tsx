import { RoundButton } from '../UI/Buttons/RoundButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Elya</h1>
      <RoundButton>
        {'but'}
      </RoundButton>
    </header>
  );
};
