import React,{useState} from 'react';
import './App.css';

function App() {
const[inputValue1, setInputValue1]= useState()
const[inputValue2, setInputValue2]= useState()
const[finalValue, setFinalValue]= useState()

function handleInputChange1(e1){
  setInputValue1(Number(e1.target.value))
}
function handleInputChange2(e2){
  setInputValue2(Number(e2.target.value))
}

function incrementCount() {
  setFinalValue(inputValue1 + inputValue2);
}
function decrementCount(){
  setFinalValue(inputValue1 - inputValue2)
}
function multiplicationCount(){
  setFinalValue(inputValue1 * inputValue2)
}
function divisionCount(){
  setFinalValue(inputValue1/inputValue2)
}
function deleteCount(){
  setFinalValue(0)
  setInputValue1("")
  setInputValue2("")
}

  return (
    <div className='results'>
    <h1>
      RESULTS
      <h2> {finalValue} </h2>
      <h3><input className='input' type="text" value={inputValue1} onChange={handleInputChange1}/></h3>
      <h3><input className='input' type="text" value={inputValue2} onChange={handleInputChange2}/></h3>
      <div className='buttons'>
      <button className='addition' onClick={incrementCount}>Addition</button>
      <button className='subtraction' onClick={decrementCount}>Subtraction</button>
      <button className='multiply' onClick={multiplicationCount}>Multiplication</button>
      <button className='divide' onClick={divisionCount}>Division</button>
      <button className='delete' onClick={deleteCount}> Delete</button>
      </div>
    </h1>
    </div>
  )
}

export default App;