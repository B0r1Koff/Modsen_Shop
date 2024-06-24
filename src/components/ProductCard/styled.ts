import styled from 'styled-components';

interface SlideImage {
  image: string;
}

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.neutral_colours.grey};
  background-color: ${(props) => props.theme.immutable_colors.white};
  border-radius: 10px;
  margin: 20px 10px 0 0px;
  position: relative;
  overflow: hidden;
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 30%;
    height: 502px;
    margin: 20px 10px 0 0px;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 40%;
    height: 218px;
    margin: 20px 2px 0 2px;
  }
  animation: ani 1s forwards;

  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`;

export const Image = styled.div<SlideImage>`
  background: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: end;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 100%;
    height: 380px;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 100%;
    height: 136px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Name = styled.h3`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.immutable_colors.black};
  user-select: none;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
  }
`;

export const Price = styled.p`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.main_colours.accent};
  user-select: none;
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }
`;

export const AddToCartButton = styled.div`
  display: none;

  ${CardContentWrapper}:hover && {
    display: flex;
    justify-self: end;
    position: absolute;
    opacity: 0.7;
    align-items: center;
    justify-content: center;
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
      height: 380px;
    }
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
      height: 136px;
    }
    width: 100%;
    background-color: white;
  }
`;

export const HoverButton = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  margin: 5px;
  >*{
    width: 100%;
    height: 100%;
  }
`

export const Svg = styled.svg`
  width: 0px;
  height: 0px;
  ${CardContentWrapper}:hover && {
    width: 50px;
    height: 50px;
    padding: 0px 5px 0px 5px;
  }
`;
