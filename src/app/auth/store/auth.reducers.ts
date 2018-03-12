import * as fromAuthActions from './auth.actions';

export interface State {
  token: string,
  authenticated: boolean
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducers(state = initialState, action: fromAuthActions.AuthActions){
  switch (action.type) {
    case (fromAuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (fromAuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (fromAuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    case (fromAuthActions.SIGNUP):
    default:
      return state;
  }
}
