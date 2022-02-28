import { CardListContainer, LoadingStyles } from './card-list.styles';

import CardItem from '../card-item/card-item.component';

const CardList = ({ pokemon, loading }) => {
  if (loading) {
    return <LoadingStyles>Loading...</LoadingStyles>;
  }
  return (
    <CardListContainer>
      {pokemon ? pokemon.map((pokemon) => (
        <CardItem key={pokemon.id} pokemon={pokemon} />
      )) : ''}
    </CardListContainer>
  );
};

export default CardList;