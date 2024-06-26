import styled from 'styled-components';

interface SliderMenuState {
  isOpened: boolean;
}

export const SliderWrapper = styled.div<SliderMenuState>`
  width: 86%;
  height: 60vh;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.isOpened &&
    `
  display: none;
  `}
  background-color: ${(props) => props.theme.immutable_colors.white};
  margin-top: 5px;
  animation: ani 1s forwards;

  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`;

export const SliderScroller = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 0.25rem;
`;

export const Button = styled.button`
  all: unset;
  display: block;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  border-radius: 100px;
  margin: 0px 5px 0px 5px;

  > * {
    fill: black;
    height: 100%;
    width: 100%;
  }
`;
