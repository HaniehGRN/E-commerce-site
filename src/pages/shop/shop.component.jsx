import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsynch } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import "./shop.styles.scss";

// const CollectionsOverviewWithSpinner = WithSpinner(CollrctionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsynch } = this.props;
        fetchCollectionsStartAsynch();
    }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
};

// const mapStateToProps = createStructuredSelector(
//     {
//         isFetching: selectIsCollectionFetching,
//         isCollectionsLoaded: selectIsCollectionsLoaded
//     }
// );

const mapDispatchToProps = dispatch => (
    {
        fetchCollectionsStartAsynch: () => dispatch(fetchCollectionsStartAsynch())
    }
);// dispatch the action

export default connect(null, mapDispatchToProps)(ShopPage);