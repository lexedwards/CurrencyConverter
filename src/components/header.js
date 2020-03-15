import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <div id="title" className="font-raleway font-medium text-3xl p-6">
      {siteTitle}
    </div>
    <div id="menuButton"></div>
    {/*}<nav id="menuPanel">
      <div id="search">
        <div id="searchBar"></div>
        <div id="searchResults hidden"></div>
      </div>

      <Link to="/">Home</Link>
      <Link to="/xcr" id="exchangeRates">
        Exchange Calculator
      </Link>
      <Link to="/countries" id="countries">
        Country Information
      </Link>
</nav>{*/}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
