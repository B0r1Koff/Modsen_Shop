import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: fit-content;
  margin: 0%;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: ${(props) => props.theme.main_colours.white};
  padding-top: 2vh;
`;

export const Nav = styled.div`
  width: 86%;
  height: 6vh;
  padding-bottom: 3px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.neutral_colours.grey};
  align-items: center;
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    padding-bottom: 6px;
  }
`;

export const ShopName = styled.h2`
  cursor: pointer;
  color: ${(props) => props.theme.main_colours.accent};
  font-family: ${(props) => props.theme.typefaces.font_logo};
  user-select: none;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.logo.size};
    font-weight: ${(props) => props.theme.typefaces.pc.logo.weight};
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.logo.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.logo.weight};
  }
`;

export const ShopNameSpan = styled.span`
  color: ${(props) => props.theme.main_colours.black};
`;

export const HomeLink = styled.a`
  text-decoration: none;
  width: 70%;
`;

export const HeaderButtonsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
`;

export const CartButton = styled.div<{isOpened: boolean}>`
  cursor: pointer;
  height: 52px;
  width: 40px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0px 15px 0px 40px;

  ${(props) => props.isOpened && `
    border-bottom: 1px solid ${props.theme.main_colours.black};
  `}
  
  >.svg{
    fill: ${(props) => props.theme.main_colours.black};
  }
`;

export const CartImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ShopButton = styled.div<{isOpened: boolean}>`
  user-select: none;
  cursor: pointer;
  height: 52px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.main_colours.black};
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
  font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  line-height: ${(props) => props.theme.typefaces.pc.heading[5].line_height};
  margin: 0px 15px 0px 40px;

  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }

  ${(props) => props.isOpened && `
    border-bottom: 1px solid ${props.theme.main_colours.black};
  `}
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.main_colours.black};
`;

export const MenuButton = styled.div`
  cursor: pointer;
  height: 52px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0px 15px 0px 12px;
  user-select: none;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    display: none;
  }

  >.svg{
    fill: ${(props) => props.theme.main_colours.black};
  }
`;

export const NumberOfCartElements = styled.div<{number: number, isActive: boolean}>`
  border: 1px solid ${(props) => props.theme.main_colours.black};
  background-color: ${(props) => props.theme.main_colours.white};
  color: ${(props) => props.theme.main_colours.black};
  user-select: none;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;

  ${(props) => props.isActive && "display: none;"}
`