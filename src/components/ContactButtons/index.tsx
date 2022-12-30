import { FC } from 'react';
import { Card } from '../Card';
import cn from 'classnames';
import { useLang } from '../../hooks/useLang';
import { WhatsAppRoundIcon } from '../../icons/WhatsAppRoundIcon';
import { TelegramIconNative } from '../../icons/TelegramIcon';
import styles from './styles.module.scss';

export const ContactButtons: FC = () => {
  return (
    <section className={styles.section}>
      <Card>
        <h2 className={styles.title}>{useLang('booking')}</h2>
        <div className={styles.buttonsWrapper}>
          <button className={cn(styles.button, styles.whatsappButton)}>
            <a href="https://wa.me/77028959868">
              <WhatsAppRoundIcon />
              <span className={styles.text}>WhatsApp</span>
            </a>
          </button>
          <button className={cn(styles.button, styles.telegramButton)}>
            <a href="https://t.me/elya_bai">
              <TelegramIconNative />
              <span className={styles.text}>Telegram</span>
            </a>
          </button>
        </div>
      </Card>
    </section>
  );
};
