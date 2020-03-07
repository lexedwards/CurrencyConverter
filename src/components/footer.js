import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
  `);

  return (
    <footer className="md:mx-auto md:max-w-sm ">
      <a
        href={data.site.siteMetadata.website}
        rel="dns-prefetch noopener noreferrer"
        target="_blank"
        className="block md:flex border-gray-600 bxs-natural bg-white rounded-lg p-6"
      >
        <Img
          className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          fluid={data.profileImage.childImageSharp.fluid}
          alt="Profile of Alex Edwards"
        />
        <div className="text-center md:text-left font-raleway">
          <p className="text-lg">Made by {data.site.siteMetadata.author}</p>
          <p className=" text-teal-700 text-sm ">Front-End Developer</p>
        </div>
      </a>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
