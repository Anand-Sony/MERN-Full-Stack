import withCounter from "./HOC/withCounter";

const ClickCounterByHOC = ({counter , handleIncrement})=>{
    return <button onClick={handleIncrement} >Clicked {counter} times </button>
};
export default withCounter(ClickCounterByHOC);