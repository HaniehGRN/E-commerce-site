import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer } from "./collection-item.styles";

// import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item;
    return (
        // View : the UI defenition
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl}>{console.log(imageUrl)}</BackgroundImage>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <span className="price">{`${price}$`}</span>
            </CollectionFooterContainer>
            <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => (
    {
        addItem: item => dispatch(addItem(item))
    }
);

export default connect(null, mapDispatchToProps)(CollectionItem);