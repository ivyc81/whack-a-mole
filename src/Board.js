import React, {useState} from 'react';
import styled from 'styled-components';
import Mole from './Mole.js';

const StyledBoard = styled.div`
  margin: auto;
`;

const Row = styled.div`
  display: flex;
`;

function Board() {
  const [board, setBoard] = useState([[1, 2, 3],[4],[5, 6]]);

  function renderBoard(){
    return board.map(ele => <Row>{ele.map(c => <div><Mole /></div>)}</Row>);
  }


  const boardHTML = renderBoard();
  return (
    <StyledBoard className="Board">
      {boardHTML}
    </StyledBoard>
  );
}

export default Board;
