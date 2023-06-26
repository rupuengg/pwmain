export interface INavigationModel {
  title: string;
  link: string;
  scrollTo: string;
  items: INavigationModel[];
}

export const defaultNavigationModel: INavigationModel = {
  title: 'Home',
  link: '/home',
  scrollTo: '',
  items: [],
}