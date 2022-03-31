import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import "./shop.styles.scss";


const ShopPage = ({ match }) => {

    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchCollectionsStart()); // dispatch the action
    }, [dispatch])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
};

export default ShopPage;