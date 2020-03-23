// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { STARSHIPS_FETCH_ASYNC } from '../types';

// Workers
import { fetchStarships } from './workers';

function* watchFetchStarships (): Generator {
    yield takeEvery(STARSHIPS_FETCH_ASYNC, fetchStarships);
}

export function* watchFeed (): Generator {
    yield all([call(watchFetchStarships)]);
}
