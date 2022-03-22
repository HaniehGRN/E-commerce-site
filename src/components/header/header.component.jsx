import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdwon from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

// import "./header.styles.scss";

const Header = ({ currentUser, hidden, signOutStart }) => {

  // const signOut = async () => {
  //   await Auth.signOut().then(() => {
  //     console.log("Successfully signed out.")
  //   });
  // }

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
          <OptionLink as="div" onClick={signOutStart} to="/">
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
    </HeaderContainer >
  );
}
const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }
);

const mapDispatchToProps = dispatch => (
  {
    signOutStart: () => dispatch(signOutStart())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
