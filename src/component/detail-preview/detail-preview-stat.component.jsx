import { InformationContainer } from "./detail-preview.styles";

const DetailPreviewStat = ({ pokemon }) => {
  return (
    <InformationContainer>
      <div>
        <p>Hp</p>
        <p>Attack</p>
        <p>Defense</p>
        <p>Special Attack</p>
        <p>Special Defense</p>
        <p>Speed</p>
      </div>
      <div>
        {pokemon.stats.map((item) => {
          return <p key={item.stat.name}>{item.base_stat}</p>;
        })}
      </div>
    </InformationContainer>
  );
};

export default DetailPreviewStat;