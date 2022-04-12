import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
// import CollectionPageContainer from "../collection/collection.container";

import "./shop.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() => import("../../components/collection-overview/collection-overview.container"));
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));

const ShopPage = ({ match }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart()); // dispatch the action
    }, [dispatch])

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    );
};

export default ShopPage;