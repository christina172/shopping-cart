import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/artist-palette-svgrepo-com.svg";

function Navbar() {
    return (
        <nav>
            <div className="logo-and-name">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"></img>
                </Link>
                <Link to="/">
                    <h1>Artistic Touch</h1>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;