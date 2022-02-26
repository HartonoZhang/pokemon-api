import {
  HeaderContainer,
  HeaderTopContainer,
  LinkContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <LinkContainer to="/" logostyle="true"><img src={process.env.PUBLIC_URL + "/pokeapi.png"} alt="logo" width={120} height={59} /></LinkContainer>
        <LinkContainer to="/favorite">MY FAVORITE</LinkContainer>
      </HeaderTopContainer>
    </HeaderContainer>
  );
};

export default Header;
