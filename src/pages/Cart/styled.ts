import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main_colours.white};
`;

export const ContentWrapper = styled.div<{isMenuOpened: boolean}>`
    width: 86%;
    display: flex;
    flex-direction: column;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        min-height: 60vh;
    }
    @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
        min-height: 40vh;
    }

    ${(props) => props.isMenuOpened && `display: none;`}
`;

export const CartTitle = styled.p`
    user-select: none;
    width: 100%;
    text-align: start;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    }
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
`

interface SlideImage {
  image: string | undefined;
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
    margin: 20px 10px 0 0px;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 40%;
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
  cursor: pointer;
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

export const ItemQuantityWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const ItemQuantityLabel = styled.p`
    width: 30%;
    height: fit-content;
    user-select: none;
    border: 1px solid ${(props) => props.theme.immutable_colors.black};
    height: 100%;
    border-radius: 5px;
    margin: 0 2% 0 2%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ItemQuantityButton = styled.button`
    all: unset;
    color: ${(props) => props.theme.main_colours.black};
    background-color: ${(props) => props.theme.main_colours.white};
    border: 1px solid ${(props) => props.theme.immutable_colors.black};
    border-radius: 5px;
    width: 10%;
    aspect-ratio: 1 / 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};

        :hover {
            color: ${(props) => props.theme.main_colours.white};
            background: ${(props) => props.theme.main_colours.black};
        }
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }

    :active {
        color: ${(props) => props.theme.main_colours.white};
        border: 1px solid ${(props) => props.theme.main_colours.black};
        background: ${(props) => props.theme.main_colours.black};
    }
`

export const FromCartButton = styled.button`
    user-select: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    background: ${(props) => props.theme.main_colours.white};
    width: 100px;
    height: 40px;
    border: none;
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    margin-bottom: 50px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};

        :hover {
            color: ${(props) => props.theme.main_colours.white};
            border: 1px solid ${(props) => props.theme.main_colours.black};
            background: ${(props) => props.theme.main_colours.black};
        }
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }

    :active {
        color: ${(props) => props.theme.main_colours.white};
        border: 1px solid ${(props) => props.theme.main_colours.black};
        background: ${(props) => props.theme.main_colours.black};
    }
`

export const CreateOrderButton = styled.button<{isActive: boolean}>`
    ${(props) => props.isActive && `display: none;`}
    user-select: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    background: ${(props) => props.theme.main_colours.white};
    width: 200px;
    height: 40px;
    border: none;
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    margin-bottom: 50px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};

        :hover {
            color: ${(props) => props.theme.main_colours.white};
            border: 1px solid ${(props) => props.theme.main_colours.black};
            background: ${(props) => props.theme.main_colours.black};
        }
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }

    :active {
        color: ${(props) => props.theme.main_colours.white};
        border: 1px solid ${(props) => props.theme.main_colours.black};
        background: ${(props) => props.theme.main_colours.black};
    }
`