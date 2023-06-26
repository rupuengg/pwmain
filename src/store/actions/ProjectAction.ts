import { ActionsUnion, createAction } from "../actionTypes/ActionTypes";
import { ProjectActionTypes } from "../actionTypes/ProjectActionTypes";

export const ProjectActions = {
  startLoading: () => createAction(ProjectActionTypes.START_LOADING, {}),
  endLoading: () => createAction(ProjectActionTypes.END_LOADING, {}),
  loadBannerList: () => createAction(ProjectActionTypes.LOAD_BANNER_LIST, {}),
};

export type ProjectAction = ActionsUnion<typeof ProjectActions>;