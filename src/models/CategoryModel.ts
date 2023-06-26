export interface ICategoryModel {
  id: number;
  title: string;
  type: string;
}

export const defaultCategoryModel: ICategoryModel = {
  id: 1,
  title: 'Kitchen',
  type: 'kitchen',
}