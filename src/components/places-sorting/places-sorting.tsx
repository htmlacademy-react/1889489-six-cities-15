import { useState } from 'react';
import { TypesOfSorting } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortingType } from '../../store/six-cities-process/selectors';
import { changeSortingType } from '../../store/six-cities-process/six-cities-process';

function PlacesSorting(): JSX.Element {
  const [isOpenList, setIsOpenList] = useState(false);
  const dispatch = useAppDispatch();
  const sortingType = useAppSelector(getSortingType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => setIsOpenList(!isOpenList)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenList ? 'places__options--opened' : ''}`}>
        {Object.values(TypesOfSorting).map((type) => (
          <li
            className={`places__option ${type === sortingType ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={type}
            onClick={() => {
              setIsOpenList(!isOpenList);
              dispatch(changeSortingType(type));
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
