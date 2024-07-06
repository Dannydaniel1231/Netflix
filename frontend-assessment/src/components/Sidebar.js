import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #343a40;
  color: white;
  padding: 1rem;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Sidebar</h2>
    </SidebarContainer>
  );
};

export default Sidebar;
