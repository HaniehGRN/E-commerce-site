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

  const signOut = async () => {
    console.log(currentUser);
    await Auth.signOut().then(() => {
      console.log("Successfully signed out.")
    });
  }
  console.log(currentUser)
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
          <OptionLink as="div" onClick={signOut} to="/">
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin' onClick={() => console.log(currentUser, hidden)}>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdwon />
      }
    </HeaderContainer >
  );
}
const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }
)

export default connect(mapStateToProps)(Header);
