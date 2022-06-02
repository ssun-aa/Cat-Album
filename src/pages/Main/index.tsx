import { fetcher } from 'utils';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import store from 'storejs';
import ImgCard from 'components/Navigation/imgCard';
import styles from './main.module.scss';
import Form from './Form';

function Main() {
  const [mainCat, setMainCat] = useState<string>('');
  const [favoriteList, setFavoriteList] =
    useRecoilState<string[]>(favListState);
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);

  const setInitialCat = async () => {
    const newCat: string = await fetcher(' ');
    setMainCat(newCat);
  };

  const updateMainCat = async (value: string) => {
    const newCat = await fetcher(value);
    setMainCat(newCat);
  };

  useEffect(() => {
    setInitialCat();
  }, []); // 처음 한번만 실행

  useEffect(() => {
    setAlreadyFavorite(favoriteList.includes(mainCat));
  }, [favoriteList, mainCat]);

  return (
    <div className={styles.wrap}>
      <Form updateMainCat={updateMainCat} />
      <div className={styles.main}>
        <ImgCard
          width="90%"
          mainCat={mainCat}
          alreadyFavorite={alreadyFavorite}
        />
      </div>
    </div>
  );
}

export default Main;
