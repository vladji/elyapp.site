import { FC } from 'react';
import { IconButton } from '../UI/Buttons/IconButton';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon';
import { InstaIcon } from '../../icons/InstaIcon';
import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>Elya</h1>
      <div className={styles.nav}>
        <IconButton linkTo="https://wa.me/77028959868">
          <WhatsAppIcon />
        </IconButton>
        <IconButton linkTo="https://instagram.com/elyapp.online">
          <InstaIcon />
        </IconButton>
      </div>
    </header>
  );
};
