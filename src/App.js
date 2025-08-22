import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [num1,setnum1]=useState();
const [num2,setnum2]=useState();
parseInt(num1)
// these variable use to store value of calculation
const[totaladd,settotaladd]=useState();
const[totalsub,settotalsub]=useState();
const[totalmul,settotalmul]=useState();
const[totaldiv,settotaldiv]=useState();


// const[showcalculation,setcalculation]=useState();
// const[Show, show]=useState();


function handlenum1(event){
  setnum1(parseInt(event.target.value))
}
function handlenum2(event){
  setnum2(parseInt(event.target.value))
}
function onSubmit(){

  settotaladd((num1)+(num2));
  settotalsub((num1)-(num2));
  settotalmul((num1)*(num2));
  settotaldiv((num1)/(num2));

  

  // setshowblock(true)


}


 
  return (
    <div>
      <input type='number' name='num1' value={num1} onChange={handlenum1} placeholder='Enter the first number'></input> 
      <input type='number' name='num2' value={num2} onChange={handlenum2}    placeholder='Enter the second number'></input> 
      
      <button onClick={onSubmit}>calulation</button>
      {totaladd && <h1>addition of {num1} and {num2} is  { totaladd}</h1>}
      {totalsub && <h1> substraction of {num1} and {num2} is {totalsub}</h1>}
      {totalmul && <h1> multiplication of {num1} and {num2} is {totalmul}</h1>}
      {totaldiv && <h1> divdation of {num1} and {num2} is {totaldiv}</h1>}
    

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
