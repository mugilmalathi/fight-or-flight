import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = ()=>{

    return(
        <div id="navbar">
            <h4 id="nav-title">Find Flight Routes</h4>
            <button id="but1"><Link className="link" to="/">Home</Link></button>
            <button id="but2"><Link className="link" to="/flight">Add Flight Routes</Link></button>
        </div>
    )
}