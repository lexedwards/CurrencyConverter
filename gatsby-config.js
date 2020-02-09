module.exports = {
  siteMetadata: {
    title: 'Currency + Countries Made Easy',
    description: 'A simple tool with a purpose',
    author: 'Alex Edwards @lexedwards',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Currency + Countries',
        short_name: 'Currency+',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        // icon : '' This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-preset-env')(),
          require('autoprefixer')(),
          require('cssnano')(),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
