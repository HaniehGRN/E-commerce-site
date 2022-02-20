import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// import './directory.styles.scss';

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </DirectoryMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        sections: selectDirectorySections
    }
);

export default connect(mapStateToProps)(Directory);