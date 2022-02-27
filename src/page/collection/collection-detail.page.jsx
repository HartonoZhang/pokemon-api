import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getPokemonData } from "../../service";
import DetailOverview from "../../component/detail-overview/detail-overview.component";
import { PageContainer, TitlePage, LinkBackStyles} from "../homepage/page.styles";

const CollectionDetailPage = () => {
  const { pokemonId } = useParams();
  const history = useHistory();
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
    <PageContainer>
      <TitlePage>Detail Pokemon Data</TitlePage>
      <LinkBackStyles onClick={() => history.push(`/`)}>BACK</LinkBackStyles>
      <DetailOverview pokemon={pokemon} loading={loading} />
    </PageContainer>
  );
};

export default CollectionDetailPage;
