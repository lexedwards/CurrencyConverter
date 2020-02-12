import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div id="menuButton"></div>
    <div id="menuPanel">
      <div id="search">
        <div id="searchBar"></div>
        <div id="searchResults hidden"></div>
      </div>
      <div id="title" className="font-raleway font-extrabold text-3xl">
        {siteTitle}
      </div>
      <div id="home"></div>
      <div id="exchangeRates"></div>
      <div id="countries"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
