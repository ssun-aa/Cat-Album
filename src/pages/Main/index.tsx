import ImgCard from 'components/imgCard';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import { IListItem } from 'types/image.d';
import { tagImageApi } from 'utils/fetcher';
import styles from './main.module.scss';

function Main() {
  const [images, setImages] = useState([]);
  const [favoriteList] = useRecoilState<string[]>(favListState);
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

  const handleClick = async (e: { currentTarget: { value: string } }) => {
    const clickedTag = e.currentTarget.value;
    const tag = tags.find((tag) => tag.name === clickedTag);
    if (tag) {
      const res = await tagImageApi(tag.id);
      setImages(res);
    }
  };

  const noData = () => {
    if (images.length !== 0) return null;
    return <span>태그를 클릭해 검색해 보세요</span>;
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.tags}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className={styles.tag}
            onClick={handleClick}
            value={tag.name}
          >
            {tag.name}
          </button>
        ))}
      </header>
      <main>
        {noData()}
        <ul>
          {images.map((item: IListItem, i) => {
            const alreadyFavorite = favoriteList.some(
              (fav) => fav === item.url
            );
            return (
              <li key={item.id}>
                <ImgCard mainCat={item.url} alreadyFavorite={alreadyFavorite} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default Main;
