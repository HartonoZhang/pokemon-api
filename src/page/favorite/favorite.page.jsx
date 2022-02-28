import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  PageContainer,
  TitlePage,
  LinkBackStyles,
  ItemNotFound,
} from "../homepage/page.styles";

import CardList from "../../component/card-list/card-list.component";
import Pagination from "../../component/pagination/paginate.component";

let PageSize = 20;

const FavoritePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberPage, setNumberPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setLoading(true);
      setPokemon(callData());
      setLoading(false);
    }
    return () => (isSubscribed = false);
  }, []);

  const callData = () => {
    const localStorageContent = localStorage.getItem("pokemons");
    var item =
      localStorageContent === null ? [] : JSON.parse(localStorageContent);
    return item;
  };

  const data = useMemo(() => {
    const firstPageIndex = (numberPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pokemon.slice(firstPageIndex, lastPageIndex);
  }, [numberPage, pokemon]);

  return (
    <PageContainer>
      <TitlePage>List Favorite Pokemon</TitlePage>
      <LinkBackStyles onClick={() => history.push(`/`)}>BACK</LinkBackStyles>
      {pokemon.length ? (
        <CardList pokemon={data} loading={loading} />
      ) : (
        <ItemNotFound>No Have</ItemNotFound>
      )}
      <Pagination
        currentPage={numberPage}
        totalCount={pokemon.length}
        pageSize={PageSize}
        onPageChange={(page) => setNumberPage(page)}
      />
    </PageContainer>
  );
};

export default FavoritePage;
