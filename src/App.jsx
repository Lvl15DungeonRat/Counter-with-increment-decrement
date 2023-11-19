import React, { useReducer } from 'react';
import "./App.css"
import { InitialState, Reducer } from './useReducer';


function App() {
  const[state, dispatch] = useReducer(Reducer, InitialState);

  const increment = () =>{
    dispatch({type: "increment"});
  }

  const decrement = () =>{
    dispatch({type: "decrement"});
  }

  return (
    <>
      <body>  
            <h1>Counter</h1>
            <h4>{state.count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
      </body> 
    </>
  );
}

export default App;
