import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CurrencySelect from '../components/CurrencySelect';

const IndexPage = () => {
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
