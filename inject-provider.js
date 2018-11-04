import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: `https://cocoon-app.herokuapp.com/v1alpha1/graphql`,
})

export default ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
