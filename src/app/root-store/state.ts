import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-store/router-state.serializer';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}
