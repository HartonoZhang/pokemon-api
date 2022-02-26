import CardItem from '../card-item/card-item.component';
import { CardListContainer } from './card-list.styles';

const CardList = ({ pokemon, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <CardListContainer>
      {pokemon.map((pokemon) => (
        <CardItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardListContainer>
  );
};

export default CardList;