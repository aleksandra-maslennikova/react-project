export const types = {
  // Sync
  FILL_PROFILE: 'FILL_PROFILE',
  START_FETCHING: 'START_FETCHING',
  STOP_FETCHING: 'STOP_FETCHING',
};

export type Profile = {
  firstName: string;
  lastName: string;
};

export type ErrorHttpAction = string;

// Sync
export const PROFILE_START_FETCHING = 'PROFILE_START_FETCHING';
type ProfileStartFetchingAction = {
  type: typeof PROFILE_START_FETCHING;
};

export const PROFILE_STOP_FETCHING = 'PROFILE_STOP_FETCHING';
type ProfileStopFetchingAction = {
  type: typeof PROFILE_STOP_FETCHING;
};

export const PROFILE_FILL = 'PROFILE_FILL';
export type ProfileFillAction = {
  type: typeof PROFILE_FILL;
  payload: Profile;
};

export const PROFILE_SET_FETCHING_ERROR = 'PROFILE_SET_FETCHING_ERROR';
export type ProfileSetFetchingErrorAction = {
  type: typeof PROFILE_SET_FETCHING_ERROR;
  error: true;
  payload: ErrorHttpAction;
};

// Async
export const PROFILE_FETCH_ASYNC = 'PROFILE_FETCH_ASYNC';
type ProfileFetchAsyncAction = {
  type: typeof PROFILE_FETCH_ASYNC;
};

export type ProfileActionTypes =
  | ProfileStartFetchingAction
  | ProfileStopFetchingAction
  | ProfileFillAction
  | ProfileSetFetchingErrorAction
  | ProfileFetchAsyncAction;
