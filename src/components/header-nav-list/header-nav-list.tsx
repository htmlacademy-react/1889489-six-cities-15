import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HeaderSignInBlock from '../header-sign-in-block/header-sign-in-block';
import HeaderSignOutBlock from '../header-sign-out-block/header-sign-out-block';

function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.Auth && <HeaderSignOutBlock />}
      {authorizationStatus !== AuthorizationStatus.Auth && <HeaderSignInBlock />}
    </ul>
  );
}

export default HeaderNavList;
