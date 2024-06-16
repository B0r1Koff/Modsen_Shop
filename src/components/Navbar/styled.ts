import styled from "styled-components";
import theme from "src/constants/static_theme";

export const Header = styled.header`
    width: 100vw;
    height: fit-content;
    margin: 0%;
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: ${props => props.theme.main_colours.white};
    padding-top: 3%;
`

export const Nav = styled.div`
    width: 86%;
    height: 52px;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${theme.light.neutral_colours.grey};
    align-items: center;
`

export const ShopName = styled.h2`
    color: ${props => props.theme.main_colours.accent};
    font-family: ${theme.typefaces.font_logo};
    user-select: none;

    @media (width > ${theme.device_sizing.size.laptop}) {
        font-size: ${theme.typefaces.pc.logo.size};
        font-weight: ${theme.typefaces.pc.logo.weight};
    }
    @media (width < ${theme.device_sizing.size.tablet}) {
        font-size: ${theme.typefaces.mobile.logo.size};
        font-weight: ${theme.typefaces.mobile.logo.weight};
    }
`

export const ShopNameSpan = styled.span`
    color: ${props => props.theme.main_colours.black};
`

export const HomeLink = styled.a`
    text-decoration: none;
    width: 70%;
`

export const HeaderButtonsWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: end;
`

export const CartButton = styled.div`
    height: 52px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0px 15px 0px 40px;
`

export const CartImg = styled.img`
    width: 24px;
    height: 24px;
`

export const ShopButton = styled.div`
    height: 52px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.main_colours.black};
    font-family: ${theme.typefaces.font_primary};
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
    line-height: ${theme.typefaces.pc.heading[5].line_height};
    margin: 0px 15px 0px 40px;

    @media (width < ${theme.device_sizing.size.tablet}) {
        display: none;
    }
`