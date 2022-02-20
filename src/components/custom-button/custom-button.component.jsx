import React from "react";

import { CustonButtonContainer } from "./custom-button.styles";

// import "./custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (

    <CustonButtonContainer {...props}>
        {children}
    </CustonButtonContainer>

);

export default CustomButton;