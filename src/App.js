import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

const [age,setage]=useState();
function handleAgeChange(event){
setage(event.target.value)

}

 
  return (
    <div>
     
     <p>enter the number</p>
     <input name='number' value={age} onChange={handleAgeChange} />
     <div>{age}</div>
    

    ?(condition):(condition)
  

    </div>
  );
}

export default App;
