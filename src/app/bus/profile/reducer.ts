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
} from './types';

export type ProfileState = {
  profile: Profile;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

const initialState: ProfileState = {
  profile: {
    firstName: 'Уолтер',
    lastName: 'Уайт',
  },
  isFetching: false,
  error: false,
};

export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case PROFILE_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case PROFILE_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case PROFILE_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PROFILE_FILL:
      return {
        ...state,
        profile: {
          ...action.payload,
        },
        error: false,
      };
    case PROFILE_FETCH_ASYNC:
      return state;
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
