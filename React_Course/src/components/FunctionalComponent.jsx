import React from "react";
const FunctionalComponent = ()=>{
    const [data , setData] = React.useState("react");

    const handleClick = (course , price)=>{
        //console.log("This is on-clock event");
        //setData ("vue");
        // so by click on the button then, "react" change to "vue"  
        
        console.log(price);
        setData(course);
    };

    return (
        <div>
            <p>This is Functional Component</p>

            {/*<button type="button" onClick={handleClick} >Click me</button> */}
            <button type="button" onClick={ ()=> handleClick("angular" , 80) } >Click me</button>
            <p>State : {data}</p>

        </div>
    );
};
export default FunctionalComponent;