import styled from "styled-components";
import theme from "src/constants/static_theme";

export const ShopPage = styled.div`
    background-color: ${props => props.theme.main_colours.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    margin-top: 10vh;
    width: 86%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    width: 100%;
    text-align: start;
    font-family: ${theme.typefaces.font_primary};
    color: ${props => props.theme.main_colours.black};

    @media (width >= ${theme.device_sizing.size.laptop}) {
        font-size: ${theme.typefaces.pc.heading[1].size};
        font-weight: ${theme.typefaces.pc.heading[1].weight};
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-size: ${theme.typefaces.mobile.heading[3].size};
        font-weight: ${theme.typefaces.mobile.heading[3].weight};
    }
`

export const ShopContent = styled.div`
    width: 100%;
    display: flex;
    @media (width >= ${theme.device_sizing.size.laptop}) {
        flex-direction: row;
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        flex-direction: column;
    }
    height: fit-content;
`

export const FiltersWrapper = styled.div`
    @media (width >= ${theme.device_sizing.size.laptop}) {
        width: 20%;
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        width: 100%;
    }
    height: fit-content;
    display: flex;
    flex-direction: column;

    >*{
        margin-top: 10px;
    }
`

export const CardsWrapper = styled.div`
    @media (width >= ${theme.device_sizing.size.laptop}) {
        width: 80%;
    }
    @media (width <= ${theme.device_sizing.size.tablet}) {
        width: 100%;
    }
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const SearchBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`

export const SearchBarImg = styled.svg`
    position: absolute;
`

export const Path = styled.path`
  fill: ${(props) => props.theme.main_colours.black};
`;

export const SearchBar = styled.input`
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.neutral_colours.dark_grey};
    color: ${(props) => props.theme.neutral_colours.grey};
    background-color: ${(props) => props.theme.main_colours.white};
    height: 30px;
`

export const FilterSelect = styled.select`

`

export const PriceText = styled.p`

`

export const CloseFilterButton = styled.button`
    all: unset;
`

export const LowElementsWrapper = styled.div`
    margin: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`