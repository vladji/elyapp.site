import create from 'zustand';

interface Store {
  lang: string;
  setLang: (lang: string) => void;
}

export const useStore = create<Store>((set) => ({
  lang: 'ru',
  setLang: (lang: string) => set((state: Store): Store => ({
    ...state,
    lang,
  })),
}));
