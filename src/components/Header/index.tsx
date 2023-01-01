import { FC } from 'react';
import { useLang } from '../../hooks/useLang';
import { IconButton } from '../UI/Buttons/IconButton';
import { WhatsAppIconBw } from '../../icons/WhatsAppIconBw';
import { TelegramIconBw } from '../../icons/TelegramIconBw';
import { InstaIconBw } from '../../icons/InstaIconBw';
import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>{useLang('logo')}</h1>
      <div className={styles.nav}>
        <IconButton linkTo="https://wa.me/77028959868">
          <WhatsAppIconBw />
        </IconButton>
        <IconButton linkTo="https://t.me/elya_bai">
          <TelegramIconBw />
        </IconButton>
        <IconButton linkTo="https://instagram.com/elyapp.online">
          <InstaIconBw />
        </IconButton>
      </div>
    </header>
  );
};
