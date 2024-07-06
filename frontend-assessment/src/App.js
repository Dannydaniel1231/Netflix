import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Sidebar />
        <MainContent />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
