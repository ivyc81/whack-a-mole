import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const Game = styled.div`
  display: flex;
  height: 100vh;

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Game className="App">
      <Board />
    </Game>
  );
}

export default App;
