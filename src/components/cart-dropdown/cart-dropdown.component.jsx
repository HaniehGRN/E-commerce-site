import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdwon = () => (

    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>go to checkout</CustomButton>
    </div>

);

export default CartDropdwon;
