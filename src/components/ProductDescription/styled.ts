import styled from "styled-components";

interface isRatingOpened{
    isOpened: boolean
}

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 40%;
        padding-left: 20px;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        width: 100%;
    }

    >*{
        margin: 0%;
        user-select: none;
    }

`

export const Name = styled.h2`
    color: ${(props) => props.theme.main_colours.black};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[2].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
    }

`

export const Price = styled.h2`
    color: ${(props) => props.theme.main_colours.accent};
    font-family: ${(props) => props.theme.typefaces.font_primary};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
    }

    padding: 20px 0 50px 0;
`

export const RatingWrapper = styled.div<isRatingOpened>`
    display: flex;
    flex-direction: column;

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        ${(props) => !props.isOpened && 'display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;'}
    }

    width: 90%;
`

export const StarPath = styled.path`
    fill: ${(props) => props.theme.main_colours.black};
`

export const ReviewsData = styled.div<isRatingOpened>`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        ${(props) => !props.isOpened && 'display: none;'}
    }

`

export const RatingNumber = styled.p`
    padding: 0 10px 0 5px;
    margin: 0;
    color: ${(props) => props.theme.main_colours.accent};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};

`

export const ReviewsText = styled.p`
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
`

export const Path = styled.path`
    fill: ${(props) => props.theme.neutral_colours.dark_grey};
    :hover{
        fill: ${(props) => props.theme.main_colours.black};
    }
`;

export const ViewMoreButton = styled.button`
    all: unset;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }

    >*{
        font-family: ${(props) => props.theme.typefaces.font_primary};
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }
`

export const ViewMoreButtonSpan = styled.span`
    color: ${(props) => props.theme.main_colours.black};
`

export const ViewMoreButtonText = styled.p`
    color: ${(props) => props.theme.main_colours.accent};
`

export const SocialNetworksIconsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    
    >*{
        padding-right: 20px;
        cursor: pointer;
    }
`

export const CategoriesText = styled.p`
    margin-top: 50px;
    color: ${(props) => props.theme.main_colours.black};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    user-select: none;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }
    
`

export const CategoriesSpan = styled.span`
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    padding-left: 15px;

`

export const AddToCartButton = styled.button`
    user-select: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    background: ${(props) => props.theme.main_colours.white};
    width: 100px;
    height: 40px;
    border: none;
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    margin-bottom: 50px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};

        :hover {
            color: ${(props) => props.theme.main_colours.white};
            border: 1px solid ${(props) => props.theme.main_colours.black};
            background: ${(props) => props.theme.main_colours.black};
        }
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }

    :active {
        color: ${(props) => props.theme.main_colours.white};
        border: 1px solid ${(props) => props.theme.main_colours.black};
        background: ${(props) => props.theme.main_colours.black};
    }
`