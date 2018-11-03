const fetch = require('node-fetch')
const { createHttpLink } = require('apollo-link-http')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'HASURA',
        // This is field under which it's accessible
        fieldName: 'cocoon',
        // Url to query from
        createLink: () =>
          createHttpLink({
            uri: 'https://cocoon-app.herokuapp.com/v1alpha1/graphql',
            headers: {},
            fetch,
          }),
      },
    },
  ],
}
