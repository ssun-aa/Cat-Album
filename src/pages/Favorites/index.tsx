import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { favListState } from 'recoil/atom';
import ImgCard from 'components/ImgCard';
import { IImgCard } from 'types/image.d';
import styles from './favorites.module.scss';

function Favorites() {
  const [favoriteList, setFavoriteList] =
    useRecoilState<IImgCard[]>(favListState);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const currentList = [...favoriteList];
    const beforIndex = result.source.index;
    const afterIndex = result.destination.index;

    const removeItem = currentList.splice(beforIndex, 1);

    currentList.splice(afterIndex, 0, removeItem[0]);

    setFavoriteList(currentList);
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.title}>
        <p>내 즐겨찾기</p>
      </header>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="favorites">
          {(provided) => (
            <main
              className="favorites"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {provided.placeholder}
              {favoriteList.map((item, i) => (
                <Draggable
                  key={`${item.tag}${item.url}`}
                  draggableId={`${item.tag}${item.url}`}
                  index={i}
                >
                  {(provide) => (
                    <li
                      ref={provide.innerRef}
                      {...provide.draggableProps}
                      {...provide.dragHandleProps}
                    >
                      <ImgCard
                        tagName={item.tag}
                        mainCat={item.url}
                        alreadyFavorite
                      />
                    </li>
                  )}
                </Draggable>
              ))}
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Favorites;
