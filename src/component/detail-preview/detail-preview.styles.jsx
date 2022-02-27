import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;

  div {
    padding: 0 10px;
    width: 50%;
  }

  div p{
    margin: 8px 0;
  }

  div:first-child{
    text-align: right;
    font-weight: bold;
  }

  div:last-child{
    text-align: left;
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