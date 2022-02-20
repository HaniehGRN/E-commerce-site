import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCounts } from "../../redux/cart/cart.selectors";
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./cart-icon.styles";

// import "./cart-icon.styles.scss";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)


const mapDispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
);

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemCounts
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);