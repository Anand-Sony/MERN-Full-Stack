import { useContext } from "react";
import CourseContext from "./context/courseContext";
const ComponentThree = ()=>{
    const {course} = useContext(CourseContext);

    return(
        <div>
            <p>Component Three</p>
            <p>Course : {course}</p>
            
        </div>
    )
};
export default ComponentThree;