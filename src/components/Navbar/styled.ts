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
  position: absolute;
`;

export const Nav = styled.div`
  width: 86%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.neutral_colours.grey};
  align-items: center;
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

export const CartButton = styled.div`
  cursor: pointer;
  height: 52px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0px 15px 0px 40px;
  
  >.svg{
    fill: ${(props) => props.theme.main_colours.black};
  }
`;

export const CartImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ShopButton = styled.div`
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
