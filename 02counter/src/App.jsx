import { useState } from 'react';
import './App.css';

function App() {


  let [counter, setCounter]= useState(0);

      const increaseCount= ()=> {
        if(counter == 20){
          return counter;
        }
      setCounter(counter+1)
    }

    const decreaseValue = ()=> {
      if(counter == 0){
        return counter;
      }
      setCounter(counter-1);
    }

  return (
    <>
    <h1>Chai or react</h1>
    <h2> counter value: {counter}</h2>

    <button onClick={increaseCount}>
      Increase value</button>

    <br></br>

    <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
