import { ProjectModel } from "../../models/ProjectModel";
import PROJECT_DATA from '../mockData/projects.json';

export interface IProjectState {
  projects: ProjectModel[],
}

export const defaultProjectState: IProjectState = {
  projects: PROJECT_DATA.data,
};

export const projectReducer = (state: IProjectState = defaultProjectState, action: any): IProjectState => {
  switch (action.type) {
    default:
      return { ...state };
  }
}