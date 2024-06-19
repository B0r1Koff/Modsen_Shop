import styled from "styled-components";
import theme from "src/constants/static_theme";

interface SlideImage {
    image: string;
  }

export const CardContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10px 0 10px;
    position: relative;
    overflow: hidden;
    @media (width > ${theme.device_sizing.size.laptop}) {
        width: 377px;
        height: 502px;
        margin: 20px 10px 0 10px;
    };
    @media (width <= ${theme.device_sizing.size.laptop}) {
        width: 136px;
        height: 218px;
        margin: 20px 2px 0 2px;
    };
`

export const Image = styled.div<SlideImage>`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    justify-content: end;

    @media (width > ${theme.device_sizing.size.laptop}) {
        width: 377px;
        height: 380px;
    };
    @media (width <= ${theme.device_sizing.size.laptop}) {
        width: 136px;
        height: 136px;
    };
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Name = styled.h3`
    font-family: ${theme.typefaces.font_primary};
    color: ${props => props.theme.main_colours.black};
    user-select: none;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (width >= ${theme.device_sizing.size.laptop}) {
        font-size: ${theme.typefaces.pc.heading[3].size};
        font-weight: ${theme.typefaces.pc.heading[3].weight};
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-size: ${theme.typefaces.mobile.heading[3].size};
        font-weight: ${theme.typefaces.mobile.heading[3].weight};
    }
`

export const Price = styled.p`
    font-family: ${theme.typefaces.font_primary};
    color: ${props => props.theme.main_colours.accent};
    user-select: none;
    @media (width >= ${theme.device_sizing.size.laptop}) {
        font-size: ${theme.typefaces.pc.heading[3].size};
        font-weight: ${theme.typefaces.pc.heading[3].weight};
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-size: ${theme.typefaces.mobile.body.small.size};
        font-weight: ${theme.typefaces.mobile.body.small.weight};
    }
`

export const AddToCartButton = styled.div`
    display: flex;
    justify-self: end;
    width: 100%;
    height: 0px;
    position: absolute;
    opacity: 0.7;
    background: image();
    display: flex;
    align-items: center;
    justify-content: center;

    ${CardContentWrapper}:hover && {
    @media (width >= ${theme.device_sizing.size.laptop}) {
        height: 380px;
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        height: 136px;
    }
        width: 100%;
        background-color: white;
    }
`

export const Svg = styled.svg`
    width: 0px;
    height: 0px;
    ${CardContentWrapper}:hover && {
        width: 50px;
        height: 50px;
    }
`