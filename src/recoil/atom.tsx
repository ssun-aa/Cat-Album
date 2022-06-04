import { atom } from 'recoil';
import store from 'storejs';

const data = store.get('favoriteList');
export const favListState = atom<string[]>({
  key: '#favList', // unique ID (with respect to other atoms/selectors)

  default: data || [], // default value (aka initial value)
});

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});
