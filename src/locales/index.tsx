import { KkMessages } from './kk.messages';
import { RuMessages } from './ru.messages';

interface Locales {
  [key: string]: { [key: string]: string };
}

export const locales: Locales = {
  kk: KkMessages,
  ru: RuMessages,
};
