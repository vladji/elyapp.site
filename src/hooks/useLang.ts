import { useStore } from './useStore';
import { locales } from '../locales';

export const useLang = (message: string) => {
  const lang = useStore(state => state.lang);
  return locales[lang][message];
};

export const useSetLang = () => {
  return useStore(state => state.setLang);
};
