import { useState , useCallback} from "react";
import ShowCounter from "./ShowCounter";
import Button from "./Button";
import Title from "./Title";

const UseCallBack = ()=>{
    const [counter1 , setCounter1] = useState(0);
    const [counter2 , setCounter2] = useState(0);

    const handleIncrementByOne = useCallback(()=>{
        setCounter1((oldCounter) => oldCounter +1 );
    }, []);

    const handleIncrementByFive =useCallback(()=>{
        setCounter2((oldCounter) => oldCounter +5 );
    } , []); 

    return (
        <div>
            <Title/>
            <ShowCounter counter={counter1} title="counter1" />
            <Button handleClick={handleIncrementByOne}>Increment by One</Button>

            <hr />
            <ShowCounter counter={counter2} title="counter2" />
            <Button handleClick={handleIncrementByFive}>Increment by Five</Button>
        </div>
    )
};
export default UseCallBack;