import { memo } from "react";
const ShowCounter = ({counter , title})=>{
    console.log(`Rendering ${title}`);
    return(
        <div>
            <h3>Title : {title}</h3>
            <p>Counter : {counter}</p>
        </div>
    )
};
export default memo(ShowCounter);