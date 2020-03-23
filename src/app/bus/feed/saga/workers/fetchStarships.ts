// Instruments
import {
  startFetching,
  stopFetching,
  fill,
  setFetchingError
} from "../../actions";
import { Starships } from "../../types";

// Workers
import { makeRequestWithSpinner } from "../../../../workers";

// API
import { api } from "../../../../api";

export function* fetchStarships(): Generator {
  const options = {
    fetcher: api.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setFetchingError
  };

  yield makeRequestWithSpinner<Starships>(options);
}
