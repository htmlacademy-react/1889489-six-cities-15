import { NameSpace, TypesOfSorting } from '../../const';
import { SixCities } from '../../types/sixCities';
import { State } from '../../types/state';

export const getCity = (state: State): SixCities => state[NameSpace.Sixities].city;
export const getSortingType = (state: State): TypesOfSorting => state[NameSpace.Sixities].sortingType;
