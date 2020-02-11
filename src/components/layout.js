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
          author
          website
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
        <a
          href={data.site.siteMetadata.website}
          rel="dns-prefetch noopener noreferrer"
          target="_blank"
          className="md:mx-auto md:max-w-sm block"
        >
          <footer className="md:flex border-gray-600 bxs-natural bg-white rounded-lg p-6">
            <Img
              className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
              fluid={data.profileImage.childImageSharp.fluid}
            />
            <div className="text-center md:text-left">
              <p className="text-lg">Made by {data.site.siteMetadata.author}</p>
              <p className=" text-teal-700 text-sm ">Front-End Developer</p>
            </div>
          </footer>
        </a>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
