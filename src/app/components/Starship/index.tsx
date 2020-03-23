// Core
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createMatchSelector } from 'connected-react-router';
import { book } from '../../routes/book';
import { AppState } from '../../init/rootReducer';
import { Starship as StarshipT, Starships } from '../../bus/feed/types';

// Instruments
import Styles from './styles.module.css';

export const Starship: FC = () => {
  const starships = useSelector<AppState, Starships>((state: AppState) => state.feed.starships);
  const matchSelector = createMatchSelector(book.starship);
  const state = useSelector((state: AppState) => state);
  const match: any = matchSelector(state);
  if (!match) {
    return null;
  }
  const starshipName = match.params.starship;
  if (!starships.length) {
    return null;
  }
  const starship: StarshipT | undefined = starships && starships.length
    ? starships.find((starship: StarshipT) => starship.name.replace(/ /g, '-').toLowerCase() === starshipName)
    : undefined;
  if (!starship) {
    return null;
  }
  const {
    name, starship_class, manufacturer, crew,
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
            {starship_class}
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
