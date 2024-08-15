const ClickCounterByRP = ({counter , handleIncrement}) => {
    return <button onClick={handleIncrement} >Clicked {counter} times</button>
};
export default ClickCounterByRP;