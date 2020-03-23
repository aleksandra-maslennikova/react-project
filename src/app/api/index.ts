import { root } from './config';
import { Starships } from '../bus/feed/types';
import { Profile } from '../bus/profile/types';

export type FetchDataType<T> = () => Promise<T>;

type APIFetchDataType = {
  starships: {
    fetch: FetchDataType<Starships>;
  };
  profile: {
    fetch: FetchDataType<Profile>;
  };
};

export const api: APIFetchDataType = {
  starships: {
    fetch: (): Promise<Starships> => fetch(`${root}/starships`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(({ results }) => results),
  },
  profile: {
    fetch: (): Promise<Profile> => fetch(`${root}/profile`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(({ results }) => results),
  },
};
