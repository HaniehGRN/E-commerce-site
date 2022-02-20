import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import {
    CheckoutItemContainer, ImageContainer, SpanElementsContainer, QuantityContainer,
    ArrowContainer, ValueContainer, RemoveButtonContainer
} from "./checkout-item.styles";

// import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <SpanElementsContainer>{name}</SpanElementsContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <SpanElementsContainer>{price}</SpanElementsContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => (
    {
        clearItem: item => dispatch(clearItemFromCart(item)),
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item))
    }
);

export default connect(null, mapDispatchToProps)(CheckoutItem);