import {IUser} from "../../model/user/interfaces/user.interface";
import any = jasmine.any;

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: void 0 as any,
}
