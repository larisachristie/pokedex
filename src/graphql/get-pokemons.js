import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      evolutions {
        name
      }
      evolutionRequirements {
        amount
        name
      }
      image
    }
  }
`;

export default GET_POKEMONS;