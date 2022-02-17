import React, { useEffect, useState } from "react";
import Main from "Components/Templates/Main/index.Main";
import Nav from "Components/Templates/Nav/index.Nav";
import SearchBar from "Components/Templates/SearchBar/index.SearchBar";
import styled from "styled-components";
import { GlobalStyle } from "Style/style";
import { JsonDataType } from "src/Types";
const App = () => {
  const [JsonData, setJsonData] = useState<JsonDataType[]>([]);
  useEffect(()=>{
    (async()=>{
     await fetch('http://localhost:4000/results').then(res => res.json()).then(res => setJsonData(res))
    })()},[]);
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <SearchBar JsonData={JsonData}/>
      <Main />
    </Container>
  );
}

const Container = styled.div`
  max-width: 672px;
  margin: auto;
`;

export default App;
