import styled from 'styled-components';

interface SideMenuState {
  isOpened: boolean;
}

export const Bar = styled.div<SideMenuState>`
  width: 100vw;
  height: 92vh;
  background: ${(props) => props.theme.main_colours.white};
  position: fixed;
  margin-top: 8vh;
  right: -3000px;
  transition: right;

  ${(props) => props.isOpened && 'right: 0px'}
`;

export const ButtonsWrapper = styled.ul`
  width: 100%;
  padding: 0%;
`;

export const Button = styled.li`
  list-style: none;
  padding: 30px 0 0 7%;
  font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
  font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
  font-family: ${(props) => props.theme.typefaces.font_primary};
`;
