import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState(
        {
            email: '',
            password: ''
        }
    );

    const dispatch = useDispatch();

    const { email, password } = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(emailSignInStart({ email, password }));
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn={true}>sign in with google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;