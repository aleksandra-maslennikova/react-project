// Core
import { put, call, delay } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

// Instruments
import { startFetching, stopFetching, fill, setFetchingError } from '../../actions';
import { Starships } from '../../types';


export function* fetchStarships(): SagaIterator {
    try {
        yield put(startFetching());

        const response: Response = yield call(fetch, 'https://swapi.co/api/starships');

        const { results }: { results: Starships } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(`We can't receive starships 😢`);
        }

        yield delay(200);
        yield put(fill(results));
    } catch (error) {
        yield put(setFetchingError(error));
    } finally {
        yield put(stopFetching());
    }
}
