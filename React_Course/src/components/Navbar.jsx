import { NavLink } from "react-router-dom"
const Navbar = ()=>{
    return (
        <nav className="primary-link">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/posts" >Post</NavLink>
            <NavLink to="/products" >Product</NavLink>
        </nav>
    )
};
export default Navbar;
