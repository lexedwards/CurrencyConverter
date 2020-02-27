import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import fetchCountries from '../api/fetchCountries';

const IndexPage = () => {
  fetchCountries();

  return (
    <Layout>
      <SEO title="Home" />
      <section id="ExchangeCalc">
        <div id="exchange"></div>
      </section>
      <section id="countryInfo"></section>
    </Layout>
  );
};

export default IndexPage;
