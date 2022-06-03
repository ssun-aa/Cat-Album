import { textImageApi } from 'utils/fetcher';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import ImgCard from 'components/imgCard';
import styles from './create.module.scss';
import Form from './Form';

function Create() {
  const [mainCat, setMainCat] = useState<string>('');
  const [favoriteList] = useRecoilState<string[]>(favListState);
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);

  const setInitialCat = async () => {
    const newCat: string = await textImageApi(' ');
    setMainCat(newCat);
  };

  const updateMainCat = async (value: string) => {
    const newCat = await textImageApi(value);
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
        <ImgCard mainCat={mainCat} alreadyFavorite={alreadyFavorite} />
      </div>
    </div>
  );
}

export default Create;
