import React from "react";
import { useLocation } from "react-router-dom";
import cart from "./images/cart-trolley-svgrepo-com-white.svg";

const Sticky = (props) => {
    const { pathname } = useLocation();
    if (pathname === "/") {
        return <></>;
    };
    return (
        <div className="sticky">
            <img className="cart" src={cart} alt="cart"></img>
            <div>{props.items} Items</div>
            <div>Total: {props.total} $</div>
        </div>
    )
};

export default Sticky;