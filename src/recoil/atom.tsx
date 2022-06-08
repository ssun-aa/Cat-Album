import { atom } from 'recoil';
import store from 'storejs';
import { IImgCard } from 'types/image.d';

const data = store.get('favoriteList');

export const favListState = atom<IImgCard[]>({
  key: '#favList', // unique ID (with respect to other atoms/selectors)

  default: data || [], // default value (aka initial value)
});

export const themeState = atom({
  key: '#themeState',
  default: 'light',
});

export const favTagData = atom({
  key: '#favoriteData',
  default: [
    {
      x: 'boxes',
      y: data ? data.filter((d: IImgCard) => d.tag === 'boxes').length : 0,
    },
    {
      x: 'clothes',
      y: data ? data.filter((d: IImgCard) => d.tag === 'clothes').length : 0,
    },
    {
      x: 'hats',
      y: data ? data.filter((d: IImgCard) => d.tag === 'hats').length : 0,
    },
    {
      x: 'sunglasses',
      y: data ? data.filter((d: IImgCard) => d.tag === 'sunglasses').length : 0,
    },
    {
      x: 'ties',
      y: data ? data.filter((d: IImgCard) => d.tag === 'ties').length : 0,
    },
  ],
});
