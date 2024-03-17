import { SIX_CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { SixCities } from '../../types/sixCities';

type LocationsTabsListProps = {
  selectedCity: SixCities;
}

function LocationsTabsList({selectedCity}: LocationsTabsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {SIX_CITIES.map((city: SixCities) => (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`} href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationsTabsList;
