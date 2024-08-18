import { useMemo, useState } from "react"

const UseMemo = ()=>{
    const [counter1 , setCounter1] = useState(0);
    const [counter2 , setCounter2] = useState(0);

    useMemo(()=>{
        slowFunction(counter1)
    } , [counter1]);

    const handleClick1 = ()=>{
        setCounter1((counter)=>counter + 1)
    }
    const handleClick2 = ()=>{
        setCounter2((counter)=>counter + 2)
    };

    return (
        <div>
            <p>Counter 1 : {counter1}</p>
            <button onClick={handleClick1} >Click Counter 1</button>

            <hr />
            <p>Counter 2 : {counter2}</p>
            <button onClick={handleClick2} >Click Counter 2</button>
        </div>
    )
};

const slowFunction = (number)=>{
    for(let i = 0 ; i < 1000000000 ; i++){}
    return number *2;
};
export default UseMemo;