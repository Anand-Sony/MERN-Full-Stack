import { useState } from "react";

const Counter = ({children})=>{
    const [counter, setCounter] = useState(0);

    const handleIncrement = ()=>{
        setCounter((oldCounter) => oldCounter + 1);
    };
    return children (counter , handleIncrement);
};
export default Counter;