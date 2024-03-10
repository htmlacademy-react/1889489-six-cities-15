import { Offer } from '../../types/offer';
import CitiesCard from '../cities-card/cities-card';
import {useState} from 'react';
import Map from '../../components/map/map';

type OffersListProps = {
  offers: Offer[];
  citiesPlacesCount: number;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, citiesPlacesCount} = props;

  const [activeCard, setActiveCard] = useState('');

  const handleActiveCard = (evt: { currentTarget: HTMLElement }) => {
    const currentId = evt.currentTarget.getAttribute('id');
    setActiveCard(currentId === null ? '' : currentId);
  };

  const handleNotActiveCard = () => {
    setActiveCard('');
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{citiesPlacesCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
              Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li
              className="places__option places__option--active"
              tabIndex={0}
            >
                Popular
            </li>
            <li className="places__option" tabIndex={0}>
                Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
                Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
                Top rated first
            </li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <CitiesCard
              offer={offer}
              key={offer.id}
              onActiveCardCallback={handleActiveCard}
              onNotActiveCardCallback={handleNotActiveCard}
              classNameContainer={'cities'}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map offers={offers} selectedPointId={activeCard} classNameContainer={'cities__map'}/>
      </div>
    </div>
  );
}

export default OffersList;
