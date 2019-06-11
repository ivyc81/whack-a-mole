import React, {useState} from 'react';
import styled from 'styled-components';
import Mole from './Mole.js';

const StyledBoard = styled.div`
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Hole = styled.div `
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid black;
  border-radius: 25px;
  margin: 5px;
  display:flex;
`;

function Board() {
  const [board, setBoard] = useState([[1, 2, 3],[4],[5, 6]]);
  const [score, setScore] = useState(0);

  function countScore(){
    setScore(score + 1);
  }

  function renderBoard(){
    return board.map(ele => <Row>{ele.map(c => <Hole><Mole triggerScore={countScore}/></Hole>)}</Row>);
  }

  const boardHTML = renderBoard();
  return (
    <StyledBoard className="Board">
      <div>Your score: {score}</div>
      {boardHTML}
    </StyledBoard>
  );
}

export default Board;
