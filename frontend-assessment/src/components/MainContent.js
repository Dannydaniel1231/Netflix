import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <h2>Main Content</h2>
    </MainContainer>
  );
};

export default MainContent;
