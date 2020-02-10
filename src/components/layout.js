/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      profileImage: file(relativePath: { eq: "Social-1080.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer className="md:flex md:mx-auto md:max-w-sm border-gray-600 bxs-natural bg-white rounded-lg p-6">
          <Img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            fluid={data.profileImage.childImageSharp.fluid}
          />
          <div className="text-center md:text-left">
            <p className="text-lg">Made by Alex Edwards</p>
            <p className=" text-teal-600 ">Front-End Developer</p>
            <a
              href="//alexedwards.co"
              rel="dns-prefetch noopener noreferrer"
              target="_blank"
            >
              Look me up!
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
