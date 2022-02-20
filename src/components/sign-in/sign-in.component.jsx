import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { Auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

// import "./sign-in.styles.scss";

import { SignInContainer, TitleContainer, ButtonsContainer } from "./sign-in.styles";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            signInWithEmailAndPassword(Auth, email, password);
            this.setState({ email: '', password: '' });
            console.log(email)
        }
        catch (error) {
            console.error(error);
            alert(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>sign in with google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;