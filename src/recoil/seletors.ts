import { selector } from 'recoil';
import { themeState } from './atom';

export const getTheme = selector({
  key: 'getTheme',
  get: ({ get }) => {
    const theme = get(themeState);
    return theme;
  },
});
