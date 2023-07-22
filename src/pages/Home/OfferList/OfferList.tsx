import { connect } from 'react-redux';
import './OfferList.scss';
import Offer from './Offer';
import React from 'react';
import { IApplicationState } from '../../../store/reducers';
import { OfferModel } from '../../../models/OfferModel';

interface IOfferList {
  offers: OfferModel[];
}

const OfferList: React.FC<IOfferList> = (props: IOfferList) => {
  const { offers } = props;

  return (
    <div className="offers">
      <div className="siteCss">
        <article className="article">
          {offers.map((offer: OfferModel, index: number) => <Offer key={`list-${index}`} offer={offer} />)}
        </article>
      </div>
    </div>
  );
}

const mapStateToProps = (store: IApplicationState) => ({
  offers: store.global.offerList,
});

export default connect(mapStateToProps)(OfferList);
