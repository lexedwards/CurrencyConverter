import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import fetchCountries from '../api/fetchCountries';
import CurrencyDropdown from '../components/currency-dropdown';
import { Select } from '../components/alt-dropdown';

const IndexPage = () => {
  fetchCountries();

  return (
    <Layout>
      <SEO title="Home" />
      <section id="ExchangeCalc">
        <CurrencyDropdown />
        <Select />
      </section>
      <section id="countryInfo"></section>
    </Layout>
  );
};

export default IndexPage;
