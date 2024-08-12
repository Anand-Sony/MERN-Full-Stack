import { useNavigate } from "react-router-dom";

const OrderConfirmation = ()=>{
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/")
    }
    return (
        <div>
            <h2>Order Confirmation Successfully</h2>
            <button onClick={handleNavigate}>Go Home</button>
        </div>
    )
};
export default OrderConfirmation;