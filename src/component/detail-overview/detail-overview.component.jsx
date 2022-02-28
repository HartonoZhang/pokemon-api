import {
  DetailOverviewContainer,
  LoadingStyles,
  ProfileDetailContainer,
  InformationAndStatContainer,
} from "./detail-overview.styles";

import DetailPreviewProfile from "../detail-preview/detail-preview-profile.component";
import DetailPreviewStat from "../detail-preview/detail-preview-stat.component";

import { upperCaseFirstIndex } from "../detail-preview/utils";


const DetailOverview = ({ pokemon, loading }) => {
  if (loading) {
    return <LoadingStyles>Loading...</LoadingStyles>;
  }
  const imgPokemon = pokemon.sprites.front_default ? pokemon.sprites.front_default : pokemon.sprites.front_shiny;
  return (
    <DetailOverviewContainer>
      <ProfileDetailContainer>
        <h1>{upperCaseFirstIndex(pokemon.name)}</h1>
        <img src={imgPokemon} alt="img" />
      </ProfileDetailContainer>
      <InformationAndStatContainer>
        <div>
          <h2>Information Profile</h2>
          <DetailPreviewProfile pokemon={pokemon} />
        </div>
        <div>
          <h2>Stat Information</h2>
          <DetailPreviewStat pokemon={pokemon} />
        </div>
      </InformationAndStatContainer>
    </DetailOverviewContainer>
  );
};

export default DetailOverview;
