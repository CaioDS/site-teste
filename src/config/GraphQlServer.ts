import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphQlServer = new ApolloClient({
  uri: process.env.WP_GRAPHQL_CLIENT_URI,
  cache: new InMemoryCache(),
});

export default graphQlServer;
