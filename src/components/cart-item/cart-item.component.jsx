import React from "react";

import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

// import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

    <CartItemContainer>
        <img src={imageUrl} alt="cart item" />
        <ItemDetailsContainer>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>

);

export default CartItem;