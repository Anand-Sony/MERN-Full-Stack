import withCounter from "./HOC/withCounter";
const HoverCounterByHOC = ({counter , handleIncrement})=>{
    return <h2 onMouseOver={handleIncrement}>Hovered {counter} times</h2>
};
export default withCounter(HoverCounterByHOC);