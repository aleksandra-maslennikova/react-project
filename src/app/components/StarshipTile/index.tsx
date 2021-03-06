// Core
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// Instruments
import Styles from './styles.module.css';
import { book } from '../../routes/book';

type PropsT = {
  name: string;
  starship_class: string;
  manufacturer: string;
  crew: string;
};

export const StarshipTile: FC<PropsT> = (props: PropsT) => {
  const dispatch = useDispatch();

  const {
    name, starship_class: starshipClass, manufacturer, crew,
  } = props;

  const navigateToStarship = (): void => {
    const url = `${book.panel}/${name.replace(/ /g, '-').toLowerCase()}`;
    dispatch(push(url));
  };

  return (
    <button type="button" className={Styles.starshipTile} onClick={navigateToStarship}>
      <h1>Ω</h1>
      <div className={Styles.description}>
        <div>
          <span>Имя:</span>
          <span>
            &nbsp;
            {name}
          </span>
        </div>
        <div>
          <span>Класс:</span>
          <span>
            &nbsp;
            {starshipClass}
          </span>
        </div>
        <div>
          <span>Производитель:</span>
          <span>
            &nbsp;
            {manufacturer}
          </span>
        </div>
        <div>
          <span>Команда:</span>
          <span>
            &nbsp;
            {crew}
          </span>
        </div>
      </div>
    </button>
  );
};
