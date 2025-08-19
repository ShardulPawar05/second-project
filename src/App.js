import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[12,25,12,8,51,4,531,]
  let ans;

   arr.map((singleElemet)=>{
     ans=2*singleElemet
   })
  

  

 
  return (
    <div>
      <div> Your arry is<br/> {arr.map((singleelemet)=>{
      return singleelemet+","
    })}</div>
     
      <div> multiply arry by 2{arr.map((singleElemet)=>{
      return 2*singleElemet+","
   })}</div>
    </div>
  );
}

export default App;
