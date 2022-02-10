import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdwon from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => Auth.signOut()}>SIGN OUT</div> :
                    <Link className="option" to="./signin">SIGN IN</Link>

            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdwon />
        }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header);