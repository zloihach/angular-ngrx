import {ConfigActions, EConfigAction} from "../actions/config.action";
import {IConfigState, initialConfigState} from "../state/config.state";

export const configReducer = (
  state = initialConfigState,
  action: ConfigActions,
): IConfigState => {
  switch (action.type) {
    case EConfigAction.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      }
    default:
      return state;
  }
}
