import { UnlikeIcon, LikeIcon } from 'assets/svgs/index.js';
import store from 'storejs';
import { favListState } from 'recoil/atom';
import { useRecoilState } from 'recoil';
import styles from './imgCard.module.scss';

interface Prop {
  // eslint-disable-next-line react/require-default-props
  width: string;
  mainCat: string;
  alreadyFavorite: boolean;
}

function ImgCard({ width, mainCat, alreadyFavorite }: Prop) {
  const [favoriteList, setFavoriteList] =
    useRecoilState<string[]>(favListState);

  function onHeartClick() {
    if (!alreadyFavorite) {
      const nextFavorite = [...favoriteList, mainCat];
      setFavoriteList(nextFavorite);
      store.set('favoriteList', nextFavorite);
    } else {
      const nextFavorite = favoriteList.filter((item) => item !== mainCat);
      setFavoriteList(nextFavorite);
      store.set('favoriteList', nextFavorite);
    }
  }

  return (
    <div className={styles.cardWrap} style={{ width }}>
      <img src={mainCat} alt="고양이" width="100%" className={styles.img} />
      <button type="button" onClick={onHeartClick}>
        {alreadyFavorite ? (
          <LikeIcon className={styles.icon} />
        ) : (
          <UnlikeIcon />
        )}
      </button>
    </div>
  );
}

export default ImgCard;
