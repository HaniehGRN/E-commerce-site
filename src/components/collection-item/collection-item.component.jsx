import React from "react";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {

    const dispatch = useDispatch();

    const { name, price, imageUrl } = item;
    return (
        // View : the UI defenition
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`${price}$`}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(item))} inverted>add to cart</CustomButton>
        </div>
    );
}

export default CollectionItem;