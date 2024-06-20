import styled from "styled-components";

export const ContentWrapper = styled.div`

`

export const RangeInputWrapper = styled.div`
    position: relative;
`

export const RangeSlider = styled.div`
    height: 5px;
    position: relative;
    background-color: ${props => props.theme.neutral_colours.grey};
    border-radius: 2px;
    pointer-events: none;
    user-select: none;
`

export const RangeSelected = styled.span`
    height: 100%;
    position: absolute;
    border-radius: 5px;
    background-color: ${props => props.theme.main_colours.black};
    pointer-events: none;
    user-select: none;
`

export const RangeInput = styled.input`
    position: absolute;
    width: 100%;
    height: 5px;
    top: -6.5px;
    background: none;
    pointer-events: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    ::-webkit-slider-thumb{
        height: 16px;
        width: 16px;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.main_colours.black};
        background-color: ${props => props.theme.neutral_colours.grey};
        pointer-events: auto;
        -webkit-appearance: none;
    }
`