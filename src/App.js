import logo from './logo.svg';
import './App.css';

function App() {
 let num=[1,2,3,4,5,6,7,8,9,10];


  

 
  return (
    <div>
      {num.map((singleElemnt)=>{
        if (singleElemnt%2===0){
          return <div><i>{singleElemnt}</i></div>
        }
        else{
          return<div><strong>{singleElemnt}</strong></div>
        }
      })}
     
    </div>
  );
}

export default App;
