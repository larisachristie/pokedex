import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_POKEMONS from '../graphql/get-pokemons';
import Pokemon from '../components/Pokemon';

const PokedexContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: {
      first: 9,
    }
  });
  const array = pokemons.map(item => <Pokemon key={item.id} pokemon={item} />);
  return (
    <div className="pokedex__container">
      {pokemons && array}
    </div>
  );
};

export default PokedexContainer;