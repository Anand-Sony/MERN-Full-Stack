import { useState } from "react"
const CounterApp = ()=>{
    const [counter , setCounter] = useState(0);

    const handleReduceCounter = ()=>{
        setCounter((oldCounter)=>oldCounter-1);
        // we can also write:- setCounter(counter-1);
    }
    const handleAddCounter = ()=>{
        setCounter((oldCounter)=>{
            return oldCounter+1;  // we can also write:- setCounter(counter+1);
        });
    }

    return (
        <div>
            <h1>Counter App</h1>
            
            {counter>0 ? <button onClick={handleReduceCounter} style={{backgroundColor:"red"}} >Reduce</button> : null}

            <span><big> {counter} </big></span>
            
            <button onClick={handleAddCounter} style={{backgroundColor:"green"}} >Increase</button>
        </div>
    );
};
export default CounterApp;