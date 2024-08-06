import {Action} from "@ngrx/store";
import {IUser} from "../../model/user/interfaces/user.interface";

export enum EUserAction {
  GetUsers = '[User] GetUsers',
  GetUsersSuccess = '[User] GetUsersSuccess',
  GetUser = '[User] GetUser',
  GetUserSuccess = '[User] GetUserSuccess',
}

export class GetUsers implements Action {
  public readonly type = EUserAction.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserAction.GetUsersSuccess;

  constructor(public payload?: IUser[]) {

  }
}

export class GetUser implements Action {
  public readonly type = EUserAction.GetUser;

  constructor(public payload: number) {
  }
}

export class GetUserSuccess implements Action {
  public readonly type = EUserAction.GetUserSuccess;

  constructor(public payload?: IUser) {
  }
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
