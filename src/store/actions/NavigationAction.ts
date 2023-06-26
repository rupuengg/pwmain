import { ActionsUnion, createAction } from "../actionTypes/ActionTypes";
import { NavigationActionTypes } from "../actionTypes/NavigationActionTypes";

export const NavigationActions = {
  startLoading: () => createAction(NavigationActionTypes.START_LOADING, {}),
  endLoading: () => createAction(NavigationActionTypes.END_LOADING, {}),
};

export type NavigationAction = ActionsUnion<typeof NavigationActions>;