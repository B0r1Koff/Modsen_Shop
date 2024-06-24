import styled from 'styled-components';

interface SliderMenuState {
  isOpened: boolean;
}

export const ShopTheLatestWrapper = styled.div<SliderMenuState>`
  width: 86%;
  height: fit-content;
  margin: 0;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.main_colours.white};
  ${(props) =>
    props.isOpened &&
    `
        display: none;
  `}
`;

export const HeadButtons = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadLink = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.main_colours.black};
  user-select: none;
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[1].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
    font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
  }
`;

export const ViewAllLink = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.main_colours.accent};
  user-select: none;
  cursor: pointer;
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
  }

  :hover{
    color: ${(props) => props.theme.main_colours.black};
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
