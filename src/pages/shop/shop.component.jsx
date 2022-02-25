import React from "react";
import { Route } from "react-router-dom";
import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from "react-redux";

import CollrctionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { convertCollectionsSnapshotToMap, db } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollrctionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = collection(db, "collections");
        onSnapshot(collectionRef, snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
);

export default connect(null, mapDispatchToProps)(ShopPage);