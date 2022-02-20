import { withRouter } from "react-router";

// import './menu-item.styles.scss';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

    return (
        <MenuItemContainer className={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
            <ContentContainer className='content'>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
};

export default withRouter(MenuItem);