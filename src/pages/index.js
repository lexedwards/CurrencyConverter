import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CurrencySelect from '../components/CurrencySelect';
import CurrencyMeta from '../components/CurrencyMeta';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section
        id="ExchangeCalc"
        className="md:mx-auto md:max-w-sm flex-row mb-6 p-6 rounded-lg bg-gray-800"
      >
        <CurrencySelect Xrole="base" />
        <CurrencyMeta />
        <CurrencySelect Xrole="target" />
      </section>
      <section id="countryInfo"></section>
    </Layout>
  );
};

export default IndexPage;
