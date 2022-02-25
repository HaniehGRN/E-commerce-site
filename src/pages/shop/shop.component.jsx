import React from "react";
import { Route } from "react-router-dom";
// import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from "react-redux";

import CollrctionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
// import { convertCollectionsSnapshotToMap, db } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import "./shop.styles.scss";

class ShopPage extends React.Component {
    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //     // const { updateCollections } = this.props;
    //     // const collectionRef = collection(db, "collections");
    //     // onSnapshot(collectionRef, snapshot => {
    //     //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     //     updateCollections(collectionsMap);
    //     // });
    // }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollrctionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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