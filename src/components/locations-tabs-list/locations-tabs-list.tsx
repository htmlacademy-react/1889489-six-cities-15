import { CITIES } from '../../const';

function LocationsTabsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city}>
          <a className="locations__item-link tabs__item tabs__item--active" href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationsTabsList;
