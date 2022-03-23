import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        signUpStart({ email, password, displayName });

        // try {
        //     // const { user } = await createUserWithEmailAndPassword(Auth, email, password);
        //     // await createUserProfileDocument(user, { displayName });
        //     this.setState(
        //         {
        //             displayName: '',
        //             email: '',
        //             password: '',
        //             confirmPassword: ''
        //         }
        //     );
        // }
        // catch (error) {
        //     console.error(error);
        // }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Dispaly Name"
                    required
                />
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
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">sign up</CustomButton>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => (
    {
        signUpStart: signUpData => dispatch(signUpStart(signUpData))
    }
)

export default connect(null, mapDispatchToProps)(SignUp);