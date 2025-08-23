import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [num1,setnum1]=useState(0);

// these variable use to store value of calculation


// const[showcalculation,setcalculation]=useState();
// const[Show, show]=useState();

// function handlenum1(event){
//   setnum1(parseInt(event.target.value))
  
function onclickcount(){ 
  
  
  setnum1(num1+1)

  // setnum1(num1==0)
  }
  

  

  // setshowblock(true)


 


 
  return (
    <div>
      <div>{num1}</div>
      <button onClick={onclickcount}>Count</button>
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     
      
    </div>
  );}


export default App;
