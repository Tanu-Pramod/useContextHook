import logo from './logo.svg';
import './App.css';
import ComA from './components/Display';
import Button from './components/Button';
import {useState} from 'react';
import { createContext } from "react";
import Display from './components/Display';


export const countContext = createContext(); 
function App() {
  const [count,setCount] = useState(0);
 
  
  return (
    <div className="App">
      <countContext.Provider value={{count,setCount}}>
      <Display/>
     <Button/>

      </countContext.Provider>
   
    </div>
  );
}

export default App;

