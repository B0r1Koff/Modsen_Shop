import styled from "styled-components"

export const ImagesWrapperContent = styled.div`
    display: flex;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 60%;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 100%;
        height: 300px;
        flex-direction: column;
    }

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
    cursor: pointer;
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 22%;
    width: 100%;
    border: 1px solid ${(props) => props.theme.neutral_colours.dark_grey};
    background-color: ${(props) => props.theme.immutable_colors.white};
    border-radius: 10px;
    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`

interface LargeImageMobileInterface{
    src: string | undefined,
    index: number
}

export const LargeImage = styled.div<{src: string | undefined}>`
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    border: 1px solid ${(props) => props.theme.neutral_colours.dark_grey};
    background-color: ${(props) => props.theme.immutable_colors.white};
    border-radius: 10px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 70%;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`

export const LargeImageMobile = styled.div<LargeImageMobileInterface>`
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 100%;
    }
    background-color: ${(props) => props.theme.immutable_colors.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
    translate: -${(props) => props.index * 100}%;
    transition: translate 0.3s ease-in-out;
`

export const LargeImageButton = styled.button`
    all: unset;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MobileImagesWrapper = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`

export const ImageScaleWrapper = styled.div`
    margin: 20px 0 50px 0;
    width: 100%;
    height: 1px;
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.neutral_colours.grey};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`

export const Scale = styled.span<{index: number}>`
    width: 20%;
    height: 1px;
    position: relative;
    background-color: ${(props) => props.theme.neutral_colours.dark_grey};
    left: ${(props) => props.index * 20}%;
    transition: translate 0.3s ease-in-out;
`
