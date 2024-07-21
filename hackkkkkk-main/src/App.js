import React from 'react';
import styled from 'styled-components';
import Header from './Component/Header';
import Assignment from './Component/Assignment';

// Fixing styled-component syntax
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 1rem;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Assignment />
  </AppContainer>
);

export default App;
