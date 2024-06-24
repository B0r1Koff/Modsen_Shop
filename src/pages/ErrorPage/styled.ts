import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.main_colours.white};
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MainText = styled.h1`
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
    }
`

export const MessageText = styled.h3`
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    text-align: center;
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }
`

export const RedirectButton = styled.button`
    all: unset;
    margin-top: 30px;
    cursor: pointer;
    user-select: none;
    text-align: center;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 150px;
        height: 50px;
        font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        width: 100px;
        height: 30px;
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }

    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 7.5px;

    :hover{
        background-color: ${(props) => props.theme.main_colours.black};
        color: ${(props) => props.theme.main_colours.white};
    }
`