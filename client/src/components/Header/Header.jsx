import React from 'react';
import BpkLargeMenu from 'bpk-component-icon/lg/menu';
import logo from './logo.svg';
import STYLES from './Header.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Skyscanner </span>
      <img className={c('Header__logo-image')} alt="Skyscanner" src={logo} />
    </a>
    <BpkLargeMenu className={c('Header__burger-icon')} />
  </header>
);

export default Header;
