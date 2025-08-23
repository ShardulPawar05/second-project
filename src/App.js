import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [num1,setnum1]=useState();
const [num2,setnum2]=useState();

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
function onADD(){

  settotaladd((num1)+(num2));
  settotaldiv(undefined);
  settotalmul(undefined);
  settotalsub(undefined)
}
function onclickSub(){
  
  settotalsub((num1)-(num2));
    settotaladd(undefined);
  settotaldiv(undefined);
  settotalmul(undefined);
  // settotalsub("")
}
function onClickMul(){
  settotalmul((num1)*(num2));
    settotaladd(undefined);
  settotaldiv(undefined);
  // settotalmul("");
  settotalsub(undefined)
}
function onClickDiv(){
  settotaldiv((num1)/(num2));
    settotaladd(undefined);
  // settotaldiv("");
  settotalmul(undefined);
  settotalsub(undefined);
  
  

  // setshowblock(true)


}


 
  return (
    <div>
      <input type='number' name='num1' value={num1} onChange={handlenum1} placeholder='Enter the first number'></input> 
      <input type='number' name='num2' value={num2} onChange={handlenum2}    placeholder='Enter the second number'></input> 
      
      <br/> <button onClick={onADD}>Addition</button>
      
      <button onClick={onclickSub}>substraction</button>
      
      <button onClick={onClickMul }  >multiplication</button>
     
      <button onClick={onClickDiv}>Divadtion</button>
    
    {totaladd !==undefined && <h1>addition of {num1} and {num2} is  { totaladd}</h1>}
    {totalsub !==undefined &&<h1> substraction of {num1} and {num2} is {totalsub}</h1>}
     {totalmul !==undefined&& <h1> multiplication of {num1} and {num2} is {totalmul}</h1>}
     {totaldiv !==undefined && <h1> divdation of {num1} and {num2} is {totaldiv}</h1>}

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
