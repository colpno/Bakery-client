import { create } from 'zustand';

import { Theme } from '~/types/index.ts';

type AppTheme = Extract<Theme, 'light' | 'dark'>;

interface State {
  theme: AppTheme;
}

interface Action {
  setTheme: (theme: AppTheme) => void;
}

const initialState: State = {
  theme: 'light',
};

const useAppStore = create<State & Action>((set) => ({
  ...initialState,
  setTheme: (theme) => set({ theme }),
}));

export default useAppStore;
