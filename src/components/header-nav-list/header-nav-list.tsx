import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderSignInBlock from '../header-sign-in-block/header-sign-in-block';
import HeaderSignOutBlock from '../header-sign-out-block/header-sign-out-block';

function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.Auth && <HeaderSignOutBlock />}
      {authorizationStatus !== AuthorizationStatus.Auth && <HeaderSignInBlock />}
    </ul>
  );
}

export default HeaderNavList;
