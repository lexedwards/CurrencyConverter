import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <div id="menuButton"></div>
    <nav id="menuPanel">
      <div id="search">
        <div id="searchBar"></div>
        <div id="searchResults hidden"></div>
      </div>
      <div id="title" className="font-raleway font-extrabold text-3xl">
        {siteTitle}
      </div>
      <Link to="/">Home</Link>
      <Link to="/xcr" id="exchangeRates">
        Exchange Calculator
      </Link>
      <Link to="/countries" id="countries">
        Country Information
      </Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
