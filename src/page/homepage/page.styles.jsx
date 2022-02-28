import styled from "styled-components";

export const TitlePage = styled.h1`
  margin: 80px 0 50px 0;
  color: rgb(207, 198, 198);
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export const LinkBackStyles = styled.h2`
  cursor: pointer;
  position: absolute;
  left: 15%;
  top: 85px;
  color: rgb(207, 198, 198);
  transition: 0.5s;

  &:hover {
    color: white;
  }
`;

export const ItemNotFound = styled.h2`
  color: rgb(207, 198, 198);
  margin: 40px 0 70px 0;
`;
