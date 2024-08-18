import { useState , useEffect} from "react"
const UseEffectCom = ()=>{
    const [counter, setCounter] = useState(0)

    const handleClick = ()=>{
        setCounter((oldCounter)=>oldCounter +1 );
    }

    useEffect (()=>{
        console.log("call the function in the every render")
    })
    useEffect(()=>{
        console.log("call the function in initial render")
    } , []);
    useEffect(()=>{
        console.log("call the function when dependency changes")
    } , [counter]);

    return (
        <div>
            <p>Use Effect Component</p>
            <button onClick={handleClick} > Click Counter </button>
            <p>Counter : {counter}</p>
        </div>
    )
};
export default UseEffectCom;