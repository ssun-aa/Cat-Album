import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import ImgCard from 'components/Navigation/imgCard';
import store from 'storejs';
import styles from './favorites.module.scss';

function Favorites() {
  const [favoriteList, setFavoriteList] =
    useRecoilState<string[]>(favListState);

  return (
    <div className={styles.wrap}>
      <header className={styles.title}>
        <p>내 즐겨찾기</p>
      </header>
      <main>
        {favoriteList.map((item, i) => (
          <ImgCard
            width="40%"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            mainCat={item}
            alreadyFavorite
          />
        ))}
      </main>
    </div>
  );
}

export default Favorites;
