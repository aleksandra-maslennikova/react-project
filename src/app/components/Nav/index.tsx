// Core
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { push, CallHistoryMethodAction } from 'connected-react-router';
import { History } from 'history';

// Instruments
import Styles from './styles.module.css';
import { book } from '../../routes/book';


type HistoryReturnType = CallHistoryMethodAction<[string, History.PoorMansUnknown?]>
export const Nav: FC<History> = (props: History) => {
  const dispatch = useDispatch();

  const navigateToRoot = (): HistoryReturnType => dispatch(push(book.root));
  const navigateToPanel = (): HistoryReturnType => dispatch(push(book.panel));
  const navigateToProfile = (): HistoryReturnType => dispatch(push(book.profile));

  const {
    location: { pathname },
  } = props;

  return (
    <section className={Styles.nav}>
      {pathname === book.root ? null : (
        <>
          <button type="button" onClick={navigateToProfile}>Профиль</button>
          <button type="button" onClick={navigateToPanel}>Панель</button>
          <button type="button" className={Styles.bridge} onClick={navigateToRoot}>
            Мостик
          </button>
        </>
      )}
    </section>
  );
};
