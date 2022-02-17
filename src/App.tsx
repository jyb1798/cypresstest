import React from "react";
import Main from "Components/Main/index.Main";
import Nav from "Components/Nav/index.Nav"
import styled from "styled-components";
import { GlobalStyle } from "Style/style";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  max-width: 672px;
  margin: auto;
`;

export default App;
