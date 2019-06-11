import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledMole = styled.div`
  margin: auto;
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: red;
  display: ${({show}) => show? 'block': 'none'}
`;


function Mole(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, Math.random() * 3000)

    return function cleanup() {
      clearInterval(timer);
    };
  });

  function handleClick(evt){
    props.triggerScore();
  }

  return (
    <StyledMole className="Mole" show={show} onClick={handleClick}>
    </StyledMole>
  );
}

export default Mole;
