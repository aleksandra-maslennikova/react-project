// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Instruments
import Styles from './styles.module.css';
import { fetchAsync } from '../../bus/feed/actions';
import { StarshipTile } from '../StarshipTile';
import { AppState } from '../../init/rootReducer';
import { Starship, StarshipsActionTypes } from '../../bus/feed/types';

export const Panel: FC = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state: AppState) => state.feed.starships);
  const isFetching = useSelector((state: AppState) => state.feed.isFetching);

  const fetchPostsAsync = (): StarshipsActionTypes => dispatch(fetchAsync());

  const starshipsJSX: JSX.Element[] | null = starships && starships.length
    ? starships.map((starship: Starship) => <StarshipTile key={starship.name} {...starship} />)
    : null;

  const buttonMessage = isFetching ? '⏳ Вызываю...' : '📲 Вызвать корабли';

  return (
    <section className={Styles.panel}>
      <h1>🖥</h1>
      <button type="button" disabled={isFetching} onClick={fetchPostsAsync}>
        {buttonMessage}
      </button>
      <ul>{starshipsJSX}</ul>
    </section>
  );
};
