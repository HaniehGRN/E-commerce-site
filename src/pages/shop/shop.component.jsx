import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import CollrctionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { fetchCollectionsStartAsynch } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollrctionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsynch } = this.props;
        fetchCollectionsStartAsynch();
    }

    render() {
        const { match, isFetching } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector(
    {
        isFetching: selectIsCollectionFetching
    }
);

const mapDispatchToProps = dispatch => (
    {
        fetchCollectionsStartAsynch: () => dispatch(fetchCollectionsStartAsynch())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);