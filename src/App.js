// import logo from './logo.svg';
import './App.css';

function App() {
 let num=[1,2,3,4,5,6,7,8,9,10];
let table=[10,20,30,40,50,60,70,80];


  

 
  return (
    <div>
      
      { table.map((singleElement)=>{
        
        
       return<div> <br/>{num.map((seingleNumber)=>{
          
          return singleElement*seingleNumber+(",")
          
        
        
          

          
          

        })
      }</div>
      
        
        
        
        
      })}
      

    

    </div>
  );
}

export default App;
