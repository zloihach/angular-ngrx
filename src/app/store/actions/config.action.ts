import {Action} from "@ngrx/store";

export enum EConfigAction {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
}


export class ConfigAction implements Action {
  readonly type = EConfigAction.GetConfig;
}

export class GetConfigSuccess implements Action {
  readonly type = EConfigAction.GetConfigSuccess;

  constructor(public payload: any) {
  }
}

export type ConfigActions = ConfigAction | GetConfigSuccess;
