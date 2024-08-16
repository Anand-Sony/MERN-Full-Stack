const HoverCounterByRP = ({counter , handleIncrement})=>{
    return <h2 onMouseOver={handleIncrement} >Hovered {counter} times</h2>
};
export default HoverCounterByRP;