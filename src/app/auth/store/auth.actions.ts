import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOTOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action{
  readonly type = TRY_SIGNUP;

  constructor(public payload: {email: string, password: string}) {}
}

export class TrySignin implements Action{
  readonly type = TRY_SIGNIN;

  constructor(public payload: {email: string, password: string}) {}
}

export type AuthActions = TrySignin | TrySignup;
