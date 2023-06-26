import { ActionsUnion, createAction } from "../actionTypes/ActionTypes";
import { UserActionTypes } from "../actionTypes/UserActionTypes";

export const UserActions = {
  userLogin: (username: string, password: string) => createAction(UserActionTypes.USER_LOGIN, { username, password }),
  userLogout: () => createAction(UserActionTypes.USER_LOGOUT, {}),
  userLoginError: (error: string) => createAction(UserActionTypes.USER_LOGIN_ERROR, { error }),
  userGet: () => createAction(UserActionTypes.USER_GET, {}),
  userProfileUpdate: () => createAction(UserActionTypes.USER_PROFILE_UPDATE, {}),
};

export type UserAction = ActionsUnion<typeof UserActions>;