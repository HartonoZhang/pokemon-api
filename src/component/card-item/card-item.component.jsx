import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { upperCaseFirstIndex } from "../detail-preview/utils";
import { CardItemContainer, CardItemButton } from "./card-item.styles";

const CardItem = ({ pokemon }) => {
  const history = useHistory();
  const [favorite, setFavorite] = useState(false);

  const { name, sprites, id } = pokemon;

  const getDataStorage = () => {
    const localStorageContent = localStorage.getItem("pokemons");
    return localStorageContent === null ? [] : JSON.parse(localStorageContent);
  }

  const insertData = () => {
    var pokemonData = getDataStorage();
    var newItem = {
      name: name,
      sprites: sprites,
      id: id,
    };
    pokemonData.push(newItem);
    localStorage.setItem("pokemons", JSON.stringify(pokemonData));
    setFavorite(true);
  };

  const removeData = () => {
    var pokemonData = getDataStorage();
    var item = pokemonData.filter((item) => item.id !== id);
    localStorage.setItem("pokemons", JSON.stringify(item));
    setFavorite(false);
  };

  useEffect(() => {
    var item = getDataStorage();
    var checkItem = item.find((item) => item.id === id);
    if (checkItem === undefined) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }, [id]);

  return (
    <CardItemContainer>
      <img src={sprites.front_default} alt="img" />
      <p>{upperCaseFirstIndex(name)}</p>
      <CardItemButton details onClick={() => history.push(`pokemon/${id}`)}>
        View Details
      </CardItemButton>
      {favorite ? (
        <CardItemButton onClick={() => removeData()}>Unfavorite</CardItemButton>
      ) : (
        <CardItemButton onClick={() => insertData()}>Favorite</CardItemButton>
      )}
    </CardItemContainer>
  );
};

export default CardItem;
