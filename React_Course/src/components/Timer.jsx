import { useState , useEffect } from "react"

const Timer = ()=>{
    const [timer , setTimer] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(new Date());
        } , 1000)  // update the time in every 1000 milliseconds

        return () =>{
            console.log("Clean-up function");
            clearInterval(interval);
        };
    } , []);
    return(
        <div>
            <p>Timer</p>
            <p>{timer.toLocaleString()}</p> {/*this will give you date and time */}

            {/* is we want time format should be 24 hours then : <p>{timer.toLocaleString('en-GB', { hour12: false })}</p> */}
            {/* if you want only time then use : <p>{timer.toLocaleTimeString()}</p> */}
            
        </div>
    )
};
export default Timer;