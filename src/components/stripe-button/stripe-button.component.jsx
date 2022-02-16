import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KThecBcK2FRvZ5MYN5KwIcvFugU8S9p9AFE4OOJhFOuEiiTK1cyISXraUKC3xtSm5OzPkLWhoWA0GF6fW7aOfH500w20vS3UI'

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="PAY NOW"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="PAY NOW"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;