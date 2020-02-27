import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import fetchCountries from '../api/fetchCountries';
import CurrencyDropdown from '../components/currency-dropdown';

const IndexPage = () => {
  fetchCountries();

  return (
    <Layout>
      <SEO title="Home" />
      <section id="ExchangeCalc">
        <CurrencyDropdown />
      </section>
      <section id="countryInfo"></section>
    </Layout>
  );
};

export default IndexPage;
