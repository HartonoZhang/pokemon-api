import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgb(65, 65, 65);
  line-height: 60px;
  position: fixed;
  top: 0;
  opacity: 0.9;
  z-index: 10;
  border-bottom: 1px solid rgb(190, 164, 164);
`;

export const HeaderTopContainer = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 22px;
`;

const linkStyles = css`
  line-height: 0px;
`;

const getLinkStyles = props => {
  if (props.logostyle) {
    return linkStyles;
  }
  return null;
};

export const LinkContainer = styled(Link)`
  color: rgb(207, 198, 198);
  transition: 0.5s;
  ${getLinkStyles};

  &:hover {
    color: white;
  }
`