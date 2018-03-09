import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState{
  auth: fromAuth.State
}
