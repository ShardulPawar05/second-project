import logo from './logo.svg';
import './App.css';

function App() {
  let num1=10,num2=20;
  let c=0;
  
    function handleaddition(){
     c=num1+num2;
    console.log(c);
 
}
 function handlesub(){
     c=num1-num2;
    console.log(c);
 }
  function handlemul(){
     c=num1*num2;
    console.log(c);
  }
   function handlediv(){
     c=num1%num2;
    console.log(c);
   }
  
    console.log(num1,num2)
   

 
  return (
    <div>
      <div>{num1}</div>
      <div>{num2}</div>
      

      <button onClick={handleaddition}> addition</button><br/>
       <button onClick={handlesub}> substarction</button><br/>
        <button onClick={handlemul}> multiplication</button><br/>
         <button onClick={handlediv}>division</button>
         
    </div>
  );
}

export default App;
