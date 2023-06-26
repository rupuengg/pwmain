export interface OfferOptionModel {
  title: string;
  img: string;
  items: string[];
}

export const defaultOfferOptionModel: OfferOptionModel = {
  title: 'Home',
  img: 'Home',
  items: [],
}

export interface OfferModel {
  floor_image: string;
  title: string;
  price: string;
  options: OfferOptionModel[];
}

export const defaultOfferModel: OfferModel = {
  floor_image: 'Home',
  title: 'Home',
  price: 'Home',
  options: [],
}