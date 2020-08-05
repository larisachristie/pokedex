import React from 'react';

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.number}</p>
        <p>{pokemon.name}</p>
        <p>{pokemon.classification}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__details">
        <p>Weight: {pokemon.weight.minimum}-{pokemon.weight.maximum}</p>
        <p>Height: {pokemon.height.minimum}-{pokemon.height.maximum}</p>
      </div>
    </div>
  )
};

export default Pokemon;