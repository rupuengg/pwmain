export interface IBedCategoryModel {
  id: number;
  title: string;
}

export const defaultBedCategoryModel: IBedCategoryModel = {
  id: 1,
  title: 'King',
}

export interface IWorkCategoryModel {
  id: number;
  title: string;
}

export const defaultWorkCategoryModel: IWorkCategoryModel = {
  id: 1,
  title: 'Bed',
}