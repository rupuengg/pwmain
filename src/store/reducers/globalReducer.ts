import { BannerModel } from "../../models/BannerModel";
import { OfferModel } from "../../models/OfferModel";
import BANNER_DATA from '../mockData/banners.json';
import OFFER_DATA from '../mockData/offers.json';

export interface IGlobalState {
  bannerList: BannerModel[],
  offerList: OfferModel[],
}

export const defaultGlobalState: IGlobalState = {
  bannerList: BANNER_DATA.data,
  offerList: OFFER_DATA.data,
};

export const globalReducer = (state: IGlobalState = defaultGlobalState, action: any): IGlobalState => {
  switch (action.type) {
    default:
      return { ...state };
  }
}