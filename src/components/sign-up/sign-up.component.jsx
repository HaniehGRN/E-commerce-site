import React from "react";
import { Auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import "./sign-up.styles.scss";

import { SignUpContainer, TitleContainer } from "./sign-up.styles";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(Auth, email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            );
        }
        catch (error) {
            alert(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Dispaly Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">sign up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }

}

export default SignUp;