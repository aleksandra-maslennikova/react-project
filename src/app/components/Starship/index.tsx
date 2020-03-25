// Core
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createMatchSelector, RouterRootState } from 'connected-react-router';
import { match } from 'react-router';
import { book } from '../../routes/book';
import { AppState } from '../../init/rootReducer';
import { Starship as StarshipT, Starships } from '../../bus/feed/types';

// Instruments
import Styles from './styles.module.css';

type ParamsT = {
  starship: string;
}

export const Starship: FC = () => {
  const starships = useSelector<AppState, Starships>((state: AppState) => state.feed.starships);
  const matchSelector = createMatchSelector<RouterRootState, ParamsT>(book.starship);
  const appState = useSelector((state: AppState) => state);
  const matched: match<ParamsT> | null = matchSelector(appState);
  if (!matched) {
    return null;
  }
  const starshipName = matched.params.starship;
  if (!starships.length) {
    return null;
  }
  const starship: StarshipT | undefined = starships && starships.length
    ? starships.find(
      (st: StarshipT) => st.name.replace(/ /g, '-').toLowerCase() === starshipName,
    )
    : undefined;
  if (!starship) {
    return null;
  }
  const {
    name, starship_class: starshipClass, manufacturer, crew,
  } = starship;
  return (
    <section className={Styles.starship}>
      <h1>Starship</h1>
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
    </section>
  );
};
