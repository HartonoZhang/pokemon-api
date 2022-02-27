import { InformationContainer, SpanTypeStyle } from "./detail-preview.styles";
import { checkingValue, upperCaseFirstIndex } from "./utils";

export const DetailPreviewProfile = ({ pokemon }) => {
  return (
    <InformationContainer>
      <div>
        <p>ID</p>
        <p>Height</p>
        <p>Weight</p>
        <p>Type</p>
        <p>Ability</p>
        <p>Base Experience</p>
      </div>
      <div>
        <p>#{pokemon.id}</p>
        <p>{checkingValue(pokemon.height)} m</p>
        <p>{checkingValue(pokemon.weight)} kg</p>
        <p>
          {pokemon.types.map((item) => {
            return (
              <SpanTypeStyle key={item.slot}>
                {upperCaseFirstIndex(item.type.name)}
              </SpanTypeStyle>
            );
          })}
        </p>
        <p>
          {pokemon.abilities.map((item) => {
            return (
              <SpanTypeStyle key={item.slot}>
                {upperCaseFirstIndex(item.ability.name)}
              </SpanTypeStyle>
            );
          })}
        </p>
        <p>{pokemon.base_experience}</p>
      </div>
    </InformationContainer>
  );
};

export default DetailPreviewProfile;
