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


function Mole() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    let timer = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, Math.random() * 1000)

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <StyledMole className="Mole" show={show}>
    </StyledMole>
  );
}

export default Mole;
