export interface State {
  token: String,
  authenticated: boolean
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducers(state = initialState, action){
  return state;
}
