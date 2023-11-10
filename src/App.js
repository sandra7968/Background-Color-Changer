import React, { useState } from 'react';
import './App.css';

function App() {
  const colors = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal","aqua"]
  const [bgColor, setBgColor] = useState('white')

  const getRandomColor = ()=>{
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    console.log(randomColor);
    setBgColor(randomColor)
  }
  return (
    <>
      <div style={{backgroundColor: bgColor, position:'relative', top:'150px', left:'500px', width:'500px', height:'300px', textAlign:'center', borderRadius:'20px', fontFamily:'cursive', paddingTop:'90px'}} >
        <h1 style={{backgroundColor: bgColor}}>Background Color Changer</h1>
        <h3 style={{marginTop:'-13px',backgroundColor: bgColor}}>Click the button to change!</h3>
        <button onClick={getRandomColor}>Random Background Color</button>
      </div>
    </>
  );
}

export default App;
