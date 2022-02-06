import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";
import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = Auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" render={() => 
          this.props.currentUser ?( 
          <Redirect to="/" />
          ) : (
            <SignInAndSignUpPage />
          )
        } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
