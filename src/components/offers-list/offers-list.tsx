import { Offer } from '../../types/offer';
import CitiesCard from '../cities-card/cities-card';

type OffersListProps = {
  offers: Offer[];
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers} = props;

  return (
    <>
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} />
      ))}
    </>
  );
}

export default OffersList;
