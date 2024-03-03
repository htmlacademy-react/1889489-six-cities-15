import { Offer } from '../../types/offer';
import CitiesCard from '../cities-card/cities-card';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers} = props;

  const [activeCard, setActiveCard] = useState('');

  const handleChangeActiveCard = (evt: { currentTarget: HTMLElement }) => {
    const currentId = evt.currentTarget.getAttribute('id');
    setActiveCard(currentId === null ? '' : currentId);
  };

  // eslint-disable-next-line no-console
  console.log('activeCard - ', activeCard);

  return (
    <>
      {offers.map((offer) => (
        <CitiesCard
          offer={offer}
          key={offer.id}
          onChangeActiveCardCallback={handleChangeActiveCard}
        />
      ))}
    </>
  );
}

export default OffersList;
