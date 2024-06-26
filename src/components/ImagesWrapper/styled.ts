import styled from "styled-components"

export const ImagesWrapperContent = styled.div`
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 60%;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 100%;
        height: 300px;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    height: 100%;
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }

`

export const SmallImage = styled.div<{src: string | undefined}>`
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 22%;
    width: 100%;
    border: 1px solid ${(props) => props.theme.neutral_colours.dark_grey};
    background-color: ${(props) => props.theme.immutable_colors.white};
    border-radius: 10px;
`

export const LargeImage = styled.div<{src: string | undefined}>`
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 70%;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 100%;
    }
    border: 1px solid ${(props) => props.theme.neutral_colours.dark_grey};
    background-color: ${(props) => props.theme.immutable_colors.white};
    border-radius: 10px;
`