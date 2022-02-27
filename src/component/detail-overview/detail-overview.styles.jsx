import styled from "styled-components";

export const LoadingStyles = styled.h2`
  color: rgb(207,198,198);
  margin: 40px 0 70px 0;
`

export const LinkBackStyles = styled.h2`
  cursor: pointer;
  position: absolute;
  left: 15%;
  top: 85px;
  color: rgb(207,198,198);
  transition: 0.5s;

  &:hover{
    color: white;
  }
`

export const DetailOverviewContainer = styled.div`
  background-color: rgb(207,198,198);
  width: 90%;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`

export const ProfileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin: 0px 0 2px 0;
  }

  img {
    height: 250px;
    width: 250px;
  }
`

export const InformationAndStatContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 12px;

  div {
    width: 100%;
  }
`