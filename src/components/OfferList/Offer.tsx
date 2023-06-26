import { useState } from 'react';
import './Offer.scss';
import { OfferModel } from '../../models/OfferModel';
import { OfferOptionModel } from '../../models/OfferModel';

interface IOffer {
  offer: OfferModel;
}

const Offer: React.FC<IOffer> = ({ offer }: IOffer) => {
  const [currentOption, setCurrentOption] = useState(0);

  const getHeader = () => {
    return (
      <>
        <section>
          <img src={offer.floor_image} alt="2bhk interiors" />
        </section>
        <figcaption>
          <p>{offer.title.toUpperCase()}</p>
          <h3>
            {offer.price}<sup>*</sup>
          </h3>
          {/* <p>Inclusive of taxes</p> */}
        </figcaption>
      </>
    );
  };

  const getLeftNav = () => {
    return (
      <nav className="navBar">
        {offer.options.map((option: OfferOptionModel, index: number) => (
          <p key={`list-${index}`} className={currentOption === index ? 'active' : ''} onClick={() => setCurrentOption(index)} style={{ 'backgroundImage': currentOption === index ? 'url("./images/active.png")' : 'none' }}>
            {option.title}
          </p>
        ))}
      </nav>
    );
  }

  const getRightContent = () => {
    const { title, img, items } = offer.options[currentOption];

    return (
      <article className="rightbox" style={{ 'display': 'block' }}>
        <img alt="Modular kitchen" src={img} />
        <hr />
        <h3>{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <figure className="offer">
      {getHeader()}
      <div className="clear"></div>
      <aside>
        <div className="w-full">
          <aside className="flex">
            {getLeftNav()}
            <section className="w-1/2">
              {getRightContent()}
            </section>
          </aside>
        </div>
      </aside>
    </figure>
  );
}

export default Offer;
