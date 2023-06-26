import { combineReducers, Reducer } from "redux";
import { INavigatonState, navigationReducer } from "./navigationReducer";
import { IProjectState, projectReducer } from "./projectReducer";
import { globalReducer, IGlobalState } from "./globalReducer";

export interface IApplicationState {
  navigation: INavigatonState;
  project: IProjectState;
  global: IGlobalState;
}

export const rootRecuer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  navigation: navigationReducer,
  project: projectReducer,
  global: globalReducer,
});

export default rootRecuer;
