import React from 'react'
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth"

function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/singleProduct">SingleProduct</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/createItem">Edit/Create Item</Link>
            <GoogleAuth/>
        </div>
    )
}

export default Header
