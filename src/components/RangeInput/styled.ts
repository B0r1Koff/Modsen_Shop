import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding-top: 30px;
    height: 0px;
`;

export const RangeInputWrapper = styled.div`
  position: relative;
`;

export const RangeSlider = styled.div`
  height: 3px;
  position: relative;
  background-color: ${(props) => props.theme.neutral_colours.grey};
  pointer-events: none;
  user-select: none;
`;

interface Selected {
  min: number;
  max: number;
}

export const RangeSelected = styled.span<Selected>`
  height: 100%;
  width: ${(props) => (props.max - props.min) * 0.1}%;
  left: ${(props) => props.min * 0.1 + 0.8}%;
  position: absolute;
  background-color: ${(props) => props.theme.main_colours.black};
  pointer-events: none;
  user-select: none;
`;

export const RangeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 3px;
  top: -4.5px;
  background: none;
  pointer-events: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::-webkit-slider-thumb {
    cursor: pointer;
    height: 12px;
    width: 2px;
    border: 3px solid ${(props) => props.theme.main_colours.black};
    background-color: ${(props) => props.theme.neutral_colours.grey};
    pointer-events: auto;
    -webkit-appearance: none;
  }
`;
