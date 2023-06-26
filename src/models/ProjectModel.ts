export interface ProjectModel {
  project_id: string;
  google_photo_link: string;
  title: string;
  address: string;
  location: string;
  default_image: string;
  designer_images: string[];
  after_work: string[];
}

export const defaultProjectModel: ProjectModel = {
  project_id: 'Home',
  google_photo_link: '/home',
  title: '',
  address: '',
  location: '',
  default_image: '',
  designer_images: [],
  after_work: [],
}