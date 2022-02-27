import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { getPokemonData } from "../../service";
import DetailOverview from "../../component/detail-overview/detail-overview.component";
import { TitleHomepage, CollectionPageContainer } from "./collection.styles";

const CollectionDetailPage = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const initialApi = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    let isMounted = true;

    const fetchApi = async () => {
      setLoading(true);
      let response = await getPokemonData(`${initialApi}/${pokemonId}`);
      if (isMounted) {
        setPokemon(response);
        setLoading(false);
      }
      return () => {
        isMounted = false;
      };
    };
    fetchApi();
  }, [pokemonId]);

  return (
    <CollectionPageContainer>
      <TitleHomepage>Detail Pokemon Data</TitleHomepage>
      <DetailOverview pokemon={pokemon} loading={loading} />
    </CollectionPageContainer>
  );
};

export default CollectionDetailPage;
