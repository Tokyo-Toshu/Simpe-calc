import React, { useState } from 'react'
import './styles/App.css';



function App() {
  const [likes, setlikes] = useState(0)
  const [terms, setterms] = useState("")

  function plus (){
    setlikes (likes + Number(terms))
    setterms ('')
  }
  function substract (){
    setlikes (likes - Number(terms))
    setterms ('')
  }
  function divide (){
    setlikes (likes / Number(terms))
    setterms ('')
  }
  function multiply (){
    setlikes (likes * Number(terms))
    setterms ('')
  }
  function  value (args){
      setterms (terms + args)
  }


  return (
    <div className="App">
      <div className='container'>
          <h2>{terms}</h2>
          <h1>{likes}</h1>
            <div className='main'>
                    <div className='low'>
                    <button className='button6' onClick={() =>  value(0)}>0</button>
                    <button className='button5' onClick={() =>  divide()}>=</button>
                    <button className='button1' onClick={() =>  plus()}>+</button>
                    </div>
                    <div className='mid'>   
                    <button className='button9' onClick={() => value (3)}>3</button>
                    <button className='button8' onClick={() => value (2)}>2</button>
                    <button className='button7' onClick={() => value (1)}>1</button>
                    <button className='button2' onClick={() =>  substract()}>-</button>
                    </div>
                    <div className='up'>
                    <button className='button12' onClick={() => value (6)}>6</button>
                    <button className='button11' onClick={() => value (5)}>5</button>
                    <button className='button10' onClick={() => value (4)}>4</button>
                    <button className='button3' onClick={() =>  multiply()}>*</button>
                    </div>
                    <div className='upper'>
                    <button className='button15' onClick={() => value (9)}>9</button>
                    <button className='button14' onClick={() => value (8)}>8</button>
                    <button className='button13' onClick={() => value (7)}>7</button>
                    <button className='button4' onClick={() =>  divide()}>/</button>
                </div>
              </div>
          </div>
      </div>
  );
}

export default App;
