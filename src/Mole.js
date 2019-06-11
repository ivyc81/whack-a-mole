import React, {useState, useEffect} from 'react';

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
    <div className="Mole">
      {show? "mole" : ''}
    </div>
  );
}

export default Mole;
