import {initialUserState, IUserState} from "./user.state";
import {IConfigState, initialConfigState} from "./config.state";
import {RouterReducerState} from "@ngrx/router-store";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
}

export function getInitialAppState(): IAppState {
  return initialAppState;
}
