import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import fetchCountries from '../api/fetchCountries';
import CurrencySelect from '../components/CurrencySelect';

const IndexPage = () => {
  fetchCountries();

  return (
    <Layout>
      <SEO title="Home" />
      <section id="ExchangeCalc">
        <CurrencySelect Xrole="base" />
        <CurrencySelect Xrole="target" />
      </section>
      <section id="countryInfo"></section>
    </Layout>
  );
};

export default IndexPage;
