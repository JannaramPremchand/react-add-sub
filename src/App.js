import React,{useState} from 'react';
import './App.css';

function App() {
  // State variables
  const [number1, setNumber1] = useState();
  let number2 = 20;

  
  const [result, setresult] = useState();
    // Function to add numbers and update total in state
  function add() {
   setresult(number1 + number2);
  }
  function sub(){
   setresult(number1 - number2);
  }
     
  return (
    <div className="main">
      <h2 className="title">Enter a value to add or subtract with value 20</h2> 
      <div className="inputs">
        <input
          type="number" id="enter"
          className="input1"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        </div> 
        <div className="buttons">
          <button
            className="button1 b1 "
            onClick={add}
            type="button"
            id="button-addon1 btn1 "
          >
            Addition
          </button>
          <button
            className="button1 b2 "
            onClick={sub}
            type="button"
            id="button-addon1 btn2 "
          >
            Subtraction
          </button>
          </div> 
        <h2 className="result">
          Result : {result}  
        </h2>
        
      
    </div>
  );
}

export default App;



