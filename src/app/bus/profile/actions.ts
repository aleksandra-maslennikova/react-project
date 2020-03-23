// Types
import {
  ErrorHttpAction,
  Profile,
  PROFILE_FETCH_ASYNC,
  PROFILE_FILL,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_START_FETCHING,
  PROFILE_STOP_FETCHING,
  ProfileActionTypes,
  ProfileFillAction,
  ProfileSetFetchingErrorAction,
} from './types';

// Sync
export function startFetching(): ProfileActionTypes {
  return {
    type: PROFILE_START_FETCHING,
  };
}

export function stopFetching(): ProfileActionTypes {
  return {
    type: PROFILE_STOP_FETCHING,
  };
}

export function fill(payload: Profile): ProfileFillAction {
  return {
    type: PROFILE_FILL,
    payload,
  };
}

export function setFetchingError(payload: ErrorHttpAction): ProfileSetFetchingErrorAction {
  return {
    type: PROFILE_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}

// Async
export function fetchAsync(): ProfileActionTypes {
  return {
    type: PROFILE_FETCH_ASYNC,
  };
}
