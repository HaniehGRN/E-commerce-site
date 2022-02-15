import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollrctionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...othersCollectionProps }) => (
                <CollectionPreview key={id} {...othersCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
);

export default connect(mapStateToProps)(CollrctionOverview);