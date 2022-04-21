import React,{useContext} from 'react';
import {countContext} from '../App';


function Button() {
  const {setCount} = useContext(countContext);
  return (
    <>
    <button onClick={()=>setCount((c)=>c+1)}>increament</button>

    </>
  
    
    )
    
}

export default Button;
