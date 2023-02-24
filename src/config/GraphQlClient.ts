import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.WP_GRAPHQL_CLIENT_URI,
});

const authLink = setContext((_, { headers }) => {
  let token;

  if (typeof window !== 'undefined') {
    console.log('entre storage', localStorage.getItem('token'));
    token = localStorage.getItem('token');
    console.log(token);
  }

  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  };
});

const graphQlClient = new ApolloClient({
  //uri: process.env.WP_GRAPHQL_CLIENT_URI,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default graphQlClient;
