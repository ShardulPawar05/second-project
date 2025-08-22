import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [name,setname]=useState();
const[showBlock,setshowblock]=useState(false);
// const[Show, show]=useState();


function handleNAmeChange(event){
  setname(event.target.value)
}
function onSubmitClick(){

  setshowblock(true)

}


 
  return (
    <div>
      {/* <p>Enter the  number</p> */}
      <input type='text' name='number'value={name} onChange={handleNAmeChange} placeholder='Enter your name'/>
      {/* <div>{age}</div> */}
      <button  onClick={onSubmitClick}>Show output</button>
          {showBlock ? <div><p>{name}</p>
          <p>
          <img src="https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-118-67b6198412889.jpg?crop=0.524xw:0.441xh;0.359xw,0.380xh&resize=1200:*"/>
          </p>
          </div> :(" click on button")}
        
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <p>Enter your name</p>
      <input type="text"name='name'value={name} onChange={handleNAmeChange}placeholder='Enter your name'/>
      <div>{name}</div>
      <button onClick={()=>setname("")}>clear name</button>
      <p>ENter your address</p>
      <input type='text' name='add' value={add} onChange={handleAddress}placeholder='Enter your address'/>
      <h1>{add}</h1>
      <button onClick={()=>setadd("")}>clear</button><br/>
      <input type='email' name='email'value={email}onChange={handleEmail}placeholder='Enter your Email address'/>
      <div>{email}</div>
      <button >clear eamil</button>
      <input type='passsword' name='passsword' value={userpass} onChange={handleUserPass}placeholder='PAssword'/>
      <div>{userpass}</div>
      <button onClick={()=>setuserpass("")}>clear</button> */}

    </div>
  );
}

export default App;
