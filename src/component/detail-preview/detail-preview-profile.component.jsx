import { InformationContainer, SpanTypeStyle } from "./detail-preview.styles";
import { checkingValue, upperCaseFirstIndex } from "./utils";

export const DetailPreviewProfile = ({ pokemon }) => {
  const { id, height, weight, types, abilities, base_experience } = pokemon;
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
        <p>#{id}</p>
        <p>{checkingValue(height)} m</p>
        <p>{checkingValue(weight)} kg</p>
        <p>
          {types.map((item) => {
            return (
              <SpanTypeStyle key={item.slot}>
                {upperCaseFirstIndex(item.type.name)}
              </SpanTypeStyle>
            );
          })}
        </p>
        <p>
          {abilities.map((item) => {
            return (
              <SpanTypeStyle key={item.slot}>
                {upperCaseFirstIndex(item.ability.name)}
              </SpanTypeStyle>
            );
          })}
        </p>
        <p>{base_experience}</p>
      </div>
    </InformationContainer>
  );
};

export default DetailPreviewProfile;
