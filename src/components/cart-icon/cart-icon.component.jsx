import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCounts } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
);

const mapStateToProps = (state) => (
    {
        itemCount: selectCartItemCounts(state)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);