import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DetailPreviewProfile from "../detail-preview/detail-preview-profile.component";
import DetailPreviewStat from "../detail-preview/detail-preview-stat.component";
import { upperCaseFirstIndex } from "../detail-preview/utils";

import {
  DetailOverviewContainer,
  LoadingStyles,
  ProfileDetailContainer,
  InformationAndStatContainer,
  LinkBackStyles
} from "./detail-overview.styles";

const DetailOverview = ({ pokemon, loading }) => {
  const history = useHistory();

  if (loading) {
    return <LoadingStyles>Loading...</LoadingStyles>;
  }

  return (
    <DetailOverviewContainer>
      <LinkBackStyles onClick={() => history.push(`/`)}>BACK</LinkBackStyles>
      <ProfileDetailContainer>
        <h1>{upperCaseFirstIndex(pokemon.name)}</h1>
        <img src={pokemon.sprites.front_default} alt="img" />
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
