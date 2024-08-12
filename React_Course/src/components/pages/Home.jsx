import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("order-confirmation");
    };

    return (
        <div>
            <h2>This is Home page</h2>
            <button onClick={handleNavigate} >Place Order</button>
        </div>
    );
};
export default Home;