import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  text-align: left;

  div {
    padding: 0 10px;
  }

  div p{
    margin: 8px 0;
  }

  div:first-child{
    width: 30%;
    font-weight: bold;
  }

  div:last-child{
    width: 70%;
  }
`

export const SpanTypeStyle = styled.span`
  background: rgb(49, 49, 49);
  color: rgb(207,198,198);
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 10px;
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