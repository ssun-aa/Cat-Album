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
    { x: 'boxes', y: data.filter((d: IImgCard) => d.tag === 'boxes').length },
    {
      x: 'clothes',
      y: data.filter((d: IImgCard) => d.tag === 'clothes').length,
    },
    { x: 'hats', y: data.filter((d: IImgCard) => d.tag === 'hats').length },
    {
      x: 'sunglasses',
      y: data.filter((d: IImgCard) => d.tag === 'sunglasses').length,
    },
    { x: 'ties', y: data.filter((d: IImgCard) => d.tag === 'ties').length },
  ],
});
