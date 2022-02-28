import styled from "styled-components";

export const CardItemContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: rgb(207, 198, 198);
  border-radius: 10px;
  padding: 10px;

  p {
    font-weight: bold;
    margin: 5px 0 8px 0;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

export const CardItemButton = styled.div`
  padding: 5px;
  margin: 3px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;
  background-color: rgb(49, 49, 49);
  color: white;
  border: 1px solid rgb(49,49,49);

  &:hover {
    background-color: #357ae8;
    border: 1px solid rgb(49,49,49);
  }
`;
