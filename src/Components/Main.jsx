import React from 'react'
import { useState } from 'react';

function Main() {
    const [counter,setCounter]=useState(0);//intial  value of setCounter is 0
    function increamentCounter() {
        setCounter(counter+1);
        
    }
    function decrementCounter() {
        if (!counter==0) {
        setCounter(counter-1);
            
        }
        
    }
    function resetCounter() {
        setCounter(0);
        
    }
  return (
    <div className='m-3 p-5'>
        <div className="counter m-5 p-5" style={{display:'flex',flexDirection:'column',margin:'100px'}}>
            <h3>Counter App</h3>
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={increamentCounter}>Increment</button>
            <button className="btn btn-danger mt-2" onClick={decrementCounter}>Decrement</button>
            <button className="btn btn-dark mt-2" onClick={resetCounter}>Reset</button>

        </div>
    </div>
  )
}

export default Main