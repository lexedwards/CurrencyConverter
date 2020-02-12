import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="PageTitle">
      <div id="title"></div>
      <div id="description"></div>
    </section>
    <section id="ExchangeCalc">
      <div id="exchange"></div>
    </section>
    <section id="countryInfo"></section>
  </Layout>
)

export default IndexPage
