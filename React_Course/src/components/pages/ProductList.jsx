import { NavLink , Outlet } from "react-router-dom"

const ProductList = ()=>{
    return (
        <div>
            <h1>List of Products</h1>

            <nav>
                <NavLink to="/products/featured" > Featured </NavLink>
                <NavLink to="/products/new" > New </NavLink>
            </nav>
            <Outlet />
            {/* Outlet is a special component that allows us to render the content of the child route.*/}
        </div>
    )
};
export default ProductList;