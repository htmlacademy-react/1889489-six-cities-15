import HeaderNavList from '../header-nav-list/header-nav-list';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <HeaderNavList />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
