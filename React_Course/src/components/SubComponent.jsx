const SubComponent = ({children})=>{
    console.log(children);
    return (
        <div>
            <p> This is Sub Component </p>
            <span> {children} </span>
        </div>
    );
} ;
export default SubComponent;