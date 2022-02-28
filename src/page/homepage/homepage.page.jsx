import { useEffect, useMemo, useState } from "react";

import { getPokemonData, getPokemon } from "../../service";

import CardList from "../../component/card-list/card-list.component";
import Pagination from "../../component/pagination/paginate.component";
import { TitlePage, PageContainer } from "./page.styles";
import { useIsMount } from "./useRef";

let PageSize = 20;

const Homepage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(0);
  const [numberPage, setNumberPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const initialApi = "https://pokeapi.co/api/v2/pokemon";
  const didMountRef = useIsMount();

  useEffect(() => {
    const fetchApi = async () => {
      let response = await getPokemonData(`${initialApi}`);
      setLimit(response.count);
    };
    if (didMountRef()) {
      return fetchApi();
    }
  });

  useEffect(() => {
    let isMounted = true;
    const fetchApi = async () => {
      setLoading(true);
      let response = await getPokemonData(
        `${initialApi}?${new URLSearchParams({
          limit,
        })}`
      );
      if (isMounted) {
        await getData(response.results);
        setLoading(false);
      }
    };
    fetchApi();
    return () => {
      isMounted = false;
    };
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
    <PageContainer>
      <TitlePage>List Pokemon</TitlePage>
      <CardList pokemon={data} loading={loading} />
      <Pagination
        currentPage={numberPage}
        totalCount={limit}
        pageSize={PageSize}
        onPageChange={(page) => setNumberPage(page)}
      />
    </PageContainer>
  );
};

export default Homepage;
