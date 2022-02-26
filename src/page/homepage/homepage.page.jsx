import { useEffect, useMemo, useState } from "react";

import { getListPokemon, getPokemon } from "../../service";

import CardList from "../../component/card-list/card-list.component";
import Pagination from "../../component/pagination/paginate.component";
import { TitleHomepage, HomePageContainer } from "./homepage.styles";

let PageSize = 20;

const Homepage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(0);
  const [numberPage, setNumberPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const initialApi = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      let response = await getListPokemon(
        `${initialApi}?${new URLSearchParams({
          limit,
        })}`
      );
      setLimit(response.count);
      await getData(response.results);
      setLoading(false);
    };
    fetchApi();
  }, [limit]);

  const data = useMemo(() => {
    const firstPageIndex = (numberPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pokemon.slice(firstPageIndex, lastPageIndex);
  }, [numberPage, pokemon]);

  const getData = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemon(pokemonData);
  };

  return (
    <HomePageContainer>
      <TitleHomepage>List Pokemon Data</TitleHomepage>
      <CardList pokemon={data} loading={loading} />
      <Pagination
        currentPage={numberPage}
        totalCount={limit}
        pageSize={PageSize}
        onPageChange={(page) => setNumberPage(page)}
      />
    </HomePageContainer>
  );
}

export default Homepage;