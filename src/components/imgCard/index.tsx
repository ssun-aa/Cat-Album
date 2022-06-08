import { LikeIcon } from 'assets/svgs/index.js';
import store from 'storejs';
import { favListState, favTagData } from 'recoil/atom';
import { useRecoilState } from 'recoil';
import { IImgCard } from 'types/image.d';
import styles from './imgCard.module.scss';

interface Prop {
  tagName: string;
  mainCat: string;
  alreadyFavorite: boolean;
}

function ImgCard({ tagName, mainCat, alreadyFavorite }: Prop) {
  const [favoriteList, setFavoriteList] =
    useRecoilState<IImgCard[]>(favListState);
  const [tagData, setTagData] = useRecoilState(favTagData);

  function onHeartClick() {
    const nextFavorite = alreadyFavorite
      ? favoriteList.filter((item) => item.url !== mainCat)
      : [...favoriteList, { tag: tagName, url: mainCat }];
    setFavoriteList(nextFavorite);
    store.set('favoriteList', nextFavorite);
    setTagData(
      tagData.map((tag) => {
        if (tag.x === tagName)
          return alreadyFavorite
            ? { x: tag.x, y: tag.y - 1 }
            : { x: tag.x, y: tag.y + 1 };
        return tag;
      })
    );
  }

  return (
    <div className={styles.cardWrap} onDoubleClick={onHeartClick}>
      <img src={mainCat} alt="고양이" width="100%" className={styles.img} />
      <button type="button" onClick={onHeartClick}>
        {alreadyFavorite ? (
          <LikeIcon className={styles.likedicon} />
        ) : (
          <LikeIcon className={styles.unLikedicon} />
        )}
      </button>
    </div>
  );
}

export default ImgCard;
