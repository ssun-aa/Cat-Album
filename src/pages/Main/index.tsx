import ImgCard from 'components/ImgCard';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import { IListItem, IImgCard } from 'types/image.d';
import { tagImageApi } from 'utils/fetcher';
import cx from 'classnames';
import styles from './main.module.scss';

function Main() {
  const [images, setImages] = useState([]);
  const [clickedTag, setClickedTag] = useState('');

  const [favoriteList] = useRecoilState<IImgCard[]>(favListState);
  const tags = [
    {
      id: 5,
      name: 'boxes',
    },
    {
      id: 15,
      name: 'clothes',
    },
    {
      id: 1,
      name: 'hats',
    },
    {
      id: 4,
      name: 'sunglasses',
    },
    {
      id: 7,
      name: 'ties',
    },
  ];

  const handleTagClick = async (e: { currentTarget: { value: string } }) => {
    const clickedButton = e.currentTarget;
    const tag = tags.find((tag) => tag.name === clickedButton.value);
    if (tag) {
      setClickedTag(tag.name);
      const res = await tagImageApi(tag.id);
      setImages(res);
    }
  };

  const noData = () => {
    if (images.length !== 0) return null;
    return <p>태그를 클릭해 검색해 보세요</p>;
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.tags}>
        {tags.map((tag) => {
          const isActive = tag.name === clickedTag;
          return (
            <button
              key={tag.id}
              type="button"
              className={cx(styles.tag, { [styles.active]: isActive })}
              onClick={handleTagClick}
              value={tag.name}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
      <main>
        {noData()}
        <ul>
          {images.map((item: IListItem) => {
            const alreadyFavorite = favoriteList.some(
              (fav) => fav.url === item.url
            );
            return (
              <li key={item.id}>
                <ImgCard
                  tagName={item.categories[0].name}
                  mainCat={item.url}
                  alreadyFavorite={alreadyFavorite}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default Main;
