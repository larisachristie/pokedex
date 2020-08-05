import React from 'react';
import PokedexContainer from './containers/PokedexContainer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <PokedexContainer />
    </ApolloProvider>
  );
}

export default App;
