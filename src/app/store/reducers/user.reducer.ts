import {initialUserState, IUserState} from "../state/user.state";
import {EUserAction, UserActions} from "../actions/user.action";

export const userReducer = (
  state = initialUserState,
  action: UserActions,
): IUserState => {
    switch (action.type) {
      case EUserAction.GetUsersSuccess:return <IUserState>{
        ...state,
        users: action.payload
      };
      case EUserAction.GetUserSuccess:return <IUserState>{
        ...state,
        selectedUser: action.payload
      }
      default:
        return state;
    }
}
