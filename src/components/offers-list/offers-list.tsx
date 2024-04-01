import { Offer } from '../../types/offer';
import CitiesCard from '../cities-card/cities-card';
import {useCallback, useState} from 'react';
import Map from '../../components/map/map';
import { SixCities } from '../../types/sixCities';
import PlacesSorting from '../places-sorting/places-sorting';

type OffersListProps = {
  offers: Offer[];
  citiesPlacesCount: number;
  selectedCity: SixCities;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, citiesPlacesCount, selectedCity} = props;

  const [activeCard, setActiveCard] = useState('');

  const handleActiveCard = useCallback((evt: { currentTarget: HTMLElement }) => {
    const currentId = evt.currentTarget.getAttribute('id');
    setActiveCard(currentId === null ? '' : currentId);
  }, []);

  const handleNotActiveCard = useCallback(() => {
    setActiveCard('');
  }, []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{citiesPlacesCount} places to stay in {selectedCity}</b>
        <PlacesSorting />
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
