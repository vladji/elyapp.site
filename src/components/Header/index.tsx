import { FC } from 'react';
import { useLang } from '../../hooks/useLang';
import { IconButton } from '../UI/Buttons/IconButton';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon';
import { TelegramIconNative } from '../../icons/TelegramIcon';
import { InstaIcon } from '../../icons/InstaIcon';
import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>{useLang('logo')}</h1>
      <div className={styles.nav}>
        <IconButton linkTo="https://wa.me/77028959868">
          <WhatsAppIcon />
        </IconButton>
        <IconButton linkTo="https://t.me/elya_bai">
          <TelegramIconNative />
        </IconButton>
        <IconButton linkTo="https://instagram.com/elyapp.online">
          <InstaIcon />
        </IconButton>
      </div>
    </header>
  );
};
