import { useHistory } from "react-router-dom";
import { CardItemContainer, CardItemButton } from './card-item.styles';

const CardItem = ({ pokemon }) => {
  const history = useHistory();

  const upperCaseFirstIndex = (value) => {
    if (!value) {
      return;
    }
    let first = value.substring(0, 1);
    let last = value.substring(1, value.length);
    return first.toUpperCase() + last;
  }

  const { name, sprites, id } = pokemon;
  return (
    <CardItemContainer>
      <img src={sprites.front_default} alt="img" />
      <p>{upperCaseFirstIndex(name)}</p>
      <CardItemButton details onClick={() => history.push(`pokemon/${id}`)}>View Details</CardItemButton>
      <CardItemButton>Favorite</CardItemButton>
    </CardItemContainer>
  );
};

export default CardItem;
