import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../../component/card-list/card-list.component";
import {
  PageContainer,
  TitlePage,
  LinkBackStyles,
  ItemNotFound,
} from "../homepage/page.styles";

const FavoritePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localStorageContent = localStorage.getItem("pokemons");
    var item =
      localStorageContent === null ? [] : JSON.parse(localStorageContent);
    setPokemon(item);
    
  }, []);

  const history = useHistory();
  return (
    <PageContainer>
      <TitlePage>Detail Pokemon Data</TitlePage>
      <LinkBackStyles onClick={() => history.push(`/`)}>BACK</LinkBackStyles>
      {
        pokemon.length ? <CardList pokemon={pokemon} loading={loading} /> : <ItemNotFound>No Have</ItemNotFound>
      }
    </PageContainer>
  );
};

export default FavoritePage;
