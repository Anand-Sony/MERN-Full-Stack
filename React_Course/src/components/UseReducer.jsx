import { useReducer } from "react"

const initialState = 0;
const reducer = (state , action)=>{
    // return new state
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state >0 ? state -1 : state  ;
            // if state > 0 => return state-1 else => state 
        default:
            return state;
    }
};

const UseReducer = ()=>{
    const [counter , dispatch] = useReducer(reducer , initialState);
    return(
        <div>
            <button onClick={()=>dispatch("increment")} > + </button>

            <p>Counter - {counter}</p>

            <button onClick={()=>dispatch("decrement")} > - </button>
        </div>
    )
};
export default UseReducer;
