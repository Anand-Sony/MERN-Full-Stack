import {useState} from "react";
const ConditionalRendering = () =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    const handleLogin = ()=>{
        setIsLoggedIn(true);
    }
    const handleLogout = ()=>{
        setIsLoggedIn(false);
    }

    let text = null;
    if(isLoggedIn){
        text = <p>Welcone User</p>
    }
    else{
        text = <p>Click to Login button to logged in</p>
    }

    return (
        <div>
            <p>{text}</p>
            {isLoggedIn===false ? ( <button onClick={handleLogin}>Login</button> ) : (<button onClick={handleLogout}>Logout</button>)}
        </div>
    );
};
export default ConditionalRendering;