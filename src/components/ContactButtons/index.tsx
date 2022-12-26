import { FC } from 'react';
import { Card } from '../Card';
import cn from 'classnames';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon';
import styles from './styles.module.scss';

export const ContactButtons: FC = () => {
  return (
    <section className={styles.section}>
      <Card>
        {/*<button className={cn(styles.button, styles.instagramButton)}>*/}
        {/*  <a href="https://instagram.com/elyapp.online">*/}
        {/*    <InstaIcon />*/}
        {/*  </a>*/}
        {/*</button>*/}
        <button className={cn(styles.button, styles.whatsappButton)}>
          <a href="https://wa.me/77028959868">
            <WhatsAppIcon />
            <span className={styles.text}>WhatsApp</span>
          </a>
        </button>
      </Card>
    </section>
  );
};
