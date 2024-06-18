import styled from "styled-components";

interface SlideImage{
    image: string
}

export const SliderWrapper = styled.div<SlideImage>`
    width: 86%;
    height: 60vh;
    border: 1px solid black;
    background-image: url(${props => props.image});
`
