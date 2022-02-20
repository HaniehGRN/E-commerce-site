import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

// import "./cart-dropdown.styles.scss";

const CartDropdwon = ({ cartItems, history, dispatch }) => (

    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>
            go to checkout
        </CustomButton>
    </CartDropdownContainer>

);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);

export default withRouter(connect(mapStateToProps)(CartDropdwon));
