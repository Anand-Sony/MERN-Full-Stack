import { memo } from "react";
const Title = ()=>{
    console.log("Rendering Title");
    return(
        <div>
            <h2>This is Title Component</h2>
        </div>
    )
};
export default memo(Title);