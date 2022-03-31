import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollrctionOverview = () => {

    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...othersCollectionProps }) => (
                    <CollectionPreview key={id} {...othersCollectionProps} />
                ))
            }
        </div>
    )
};

export default CollrctionOverview;