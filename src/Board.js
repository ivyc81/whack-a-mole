import React, {useState, useEffect} from 'react';
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
  const [time, setTime] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    let timeout = setTimeout(() => {
      clearInterval(timer);
      setBoard([[0, 0, 0], [0], [0, 0]]);
    }, 60000);

    return function cleanup() {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  function countScore(){
    setScore(score + 1);
  }

  function renderBoard(){
  return board.map(ele => <Row>{ele.map(c => <Hole>{c ? <Mole triggerScore={countScore}/> : ''}</Hole>)}</Row>);
  }

  const boardHTML = renderBoard();
  return (
    <StyledBoard className="Board">
      <div>Your score: {score}</div>
      <div>Remaining time:{time} sec</div>
      {boardHTML}
    </StyledBoard>
  );
}

export default Board;
