import styled, { css } from "styled-components";

const favoriteStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #df4723;
    color: white;
    border: 1px solid #df4723;
  }
`;

const detailStyles = css`
  background-color: rgb(49, 49, 49);
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.details) {
    return detailStyles;
  }
  return favoriteStyles;
};

export const CardItemContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
  background-color: rgb(207, 198, 198);
  border-radius: 10px;
  padding: 10px;

  p {
    font-weight: bold;
    margin: 5px 0 8px 0;
  }
`;

export const CardItemButton = styled.div`
  ${getButtonStyles};
  padding: 5px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;
`;
