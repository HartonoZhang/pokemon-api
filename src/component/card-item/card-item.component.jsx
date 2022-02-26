import { CardItemContainer, CardItemButton } from './card-item.styles';

const CardItem = ({ pokemon }) => {
  const { name, sprites } = pokemon;
  return (
    <CardItemContainer>
      <img src={sprites.front_default} alt="img" />
      <p>{name.toUpperCase()}</p>
      <CardItemButton details>View Details</CardItemButton>
      <CardItemButton>Favorite</CardItemButton>
    </CardItemContainer>
  );
};

export default CardItem;
