import styled from "styled-components";

export const ProductPageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.main_colours.white};
`;

export const ContentWrapper = styled.div<{isMenuOpened: boolean}>`
    width: 86%;
    margin-top: 8vh;
    height: fit-content;
    display: flex;
    flex-direction: column;

    ${(props) => props.isMenuOpened && `display: none;`}
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        flex-direction: row;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        flex-direction: column;
    }
`

export const DescriptionTitle = styled.p`
    user-select: none;
    padding-top: 50px;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
        font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
`

export const DescriptionScaleWrapper = styled.div`
    width: 100%;
    height: 1px;
    display: flex;
    background-color: ${(props) => props.theme.neutral_colours.grey};

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
`

export const Scale = styled.span`
    width: 110px;
    position: relative;
    background-color: ${(props) => props.theme.neutral_colours.dark_grey};
    
`

export const DescriptionText = styled.p<{isOpened: boolean}>`
    user-select: none;
    padding-top: 20px;
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        ${(props) => !props.isOpened && "display: none"}
        ${(props) => props.isOpened && `border-top: 1px solid ${props.theme.neutral_colours.grey};`}
    }
`

export const DescriptionButton = styled.button<{isOpened: boolean}>`
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }

    all: unset;
    cursor: pointer;
    color: ${(props) => props.theme.main_colours.black};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${(props) => props.theme.neutral_colours.grey};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${(props) => !props.isOpened && `border-top: 1px solid ${props.theme.neutral_colours.grey};`}
    ${(props) => props.isOpened && `margin: 0;`}
`

export const Path = styled.path`
    fill: ${(props) => props.theme.main_colours.black};
`

export const SimilarItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        overflow-x: scroll;
    }
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        flex-direction: column;
    }
`

export const SimilarItemsTitle = styled.p`
    user-select: none;
    color: ${(props) => props.theme.main_colours.black};
    font-family: ${(props) => props.theme.typefaces.font_primary};
    padding-top: 50px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[2].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
    }
`