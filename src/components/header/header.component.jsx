import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdwon from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

// import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="">
                    CONTACT
                </OptionLink>
                {currentUser ? (
                    <OptionLink as="div" onClick={() => Auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdwon />
            }
        </HeaderContainer>
    );
}
const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)

export default connect(mapStateToProps)(Header);