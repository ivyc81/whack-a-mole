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
    let timeout;
    let timer = setInterval(() => {
      setShow(true);
      timeout = setTimeout(() => setShow(false), 1000);
    }, Math.random() * 4000 + 1000)

    return function cleanup() {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  function handleClick(evt){
    props.triggerScore();
  }

  return (
    <StyledMole className="Mole" show={show} onClick={handleClick}>
    </StyledMole>
  );
}

export default Mole;
