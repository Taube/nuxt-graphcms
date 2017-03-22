import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graphcms.com/simple/v1/cj0cwtc4y0e09017837hdemys',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
})

export default apolloClient