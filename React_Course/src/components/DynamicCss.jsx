import React, { useState } from 'react';
import "../assets/css/style.css";

const CssStyle = () => {
  const [color, setColor] = useState('red'); 

  const changeColor = () => {
    // toggle between red and blue
    setColor(color === 'red' ? 'blue' : 'red');
  };

  return (
    <div className={`container ${color}`}>
      <p>Css Styling</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default CssStyle;