import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {routerReducer} from "@ngrx/router-store";
import {configReducer} from "./config.reducer";
import {userReducer} from "./user.reducer";

export const appReducer: ActionReducerMap<IAppState, any> = {
  config: configReducer, router: routerReducer, users: userReducer
}
