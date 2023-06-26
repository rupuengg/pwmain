import { ICategoryModel } from "../../models/CategoryModel"
import { INavigationModel } from "../../models/NavigationModel"
import { IBedCategoryModel, IWorkCategoryModel } from "../../models/WorkCategoryModel"

export interface INavigatonState {
  navigationMenu: INavigationModel[],
  categories: ICategoryModel[],
  works: IWorkCategoryModel[],
  bed_category: IBedCategoryModel[];
}

export const defaultNavigationReducer: INavigatonState = {
  navigationMenu: [
    {
      title: 'Home',
      link: '/home',
      scrollTo: '',
      items: []
    },
    {
      title: 'About',
      link: '/about',
      scrollTo: '',
      items: []
    },
    {
      title: 'Services',
      link: '/services',
      scrollTo: '',
      items: [
        {
          title: 'All Services',
          link: '/services/all',
          scrollTo: '',
          items: []
        },
        {
          title: 'Residences interiors',
          link: '/services/residences',
          scrollTo: '',
          items: []
        },
        {
          title: 'Recreation Interiors',
          link: '/services/recreation',
          scrollTo: '',
          items: []
        },
        {
          title: 'Modular kitchen',
          link: '/services/modularkitchen',
          scrollTo: '',
          items: []
        },
        {
          title: 'living room interiors',
          link: '/services/livingroom',
          scrollTo: '',
          items: []
        },
      ]
    },
    {
      title: 'Gallery',
      link: '/gallery',
      scrollTo: '',
      items: []
    },
    {
      title: 'Projects',
      link: '/projects',
      scrollTo: '',
      items: []
    },
    {
      title: 'Contact',
      link: '/contact',
      scrollTo: '',
      items: []
    }
  ],
  categories: [
    {
      id: 1,
      title: 'Kitchen',
      type: 'kitchen'
    }, {
      id: 2,
      title: 'Living Area',
      type: 'common'
    }, {
      id: 3,
      title: 'Dinning Area',
      type: 'common'
    }, {
      id: 4,
      title: 'Master Bedroom',
      type: 'room'
    }, {
      id: 5,
      title: 'Second Bedroom',
      type: 'room'
    }, {
      id: 6,
      title: 'Thrid Bedroom',
      type: 'room'
    }, {
      id: 7,
      title: 'Bathroom',
      type: 'bathroom'
    }, {
      id: 8,
      title: 'Common Bathroom',
      type: 'bathroom'
    }, {
      id: 9,
      title: 'Balcony',
      type: 'balcony'
    }
  ],
  works: [
    {
      id: 1,
      title: 'Bed'
    }
  ],
  bed_category: [
    {
      id: 1,
      title: 'King'
    }, {
      id: 2,
      title: 'Queen'
    }, {
      id: 3,
      title: 'Single'
    }
  ]
};

export const navigationReducer = (state: INavigatonState = defaultNavigationReducer, action: any): INavigatonState => {
  switch (action.type) {
    default:
      return { ...state };
  }
}