import styled from 'styled-components';
import theme from 'src/constants/static_theme';

interface SlideImage {
  image: string;
  index: number;
}

export const SlideWrapper = styled.div<SlideImage>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  translate: -${(props) => props.index * 100}%;
  transition: translate 0.3s ease-in-out;
  justify-content: end;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Text = styled.div`
  user-select: none;
  font-family: ${theme.typefaces.font_primary};
  color: ${theme.light.main_colours.white};

  @media (width > ${theme.device_sizing.size.laptop}) {
    font-size: ${theme.typefaces.pc.heading[2].size};
    font-weight: ${theme.typefaces.pc.heading[2].weight};
  }

  @media (width < ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.heading[1].size};
    font-weight: ${theme.typefaces.mobile.heading[1].weight};
  }

  padding-bottom: 10px;
  margin-left: 15px;
`;

export const Price = styled.div`
  user-select: none;
  font-family: ${theme.typefaces.font_primary};
  color: ${theme.light.main_colours.white};

  @media (width > ${theme.device_sizing.size.laptop}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width < ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.heading[3].size};
    font-weight: ${theme.typefaces.mobile.heading[3].weight};
  }

  padding-bottom: 10px;
  margin-left: 15px;
`;

export const Button = styled.button`
  user-select: none;
  cursor: pointer;
  font-family: ${theme.typefaces.font_primary};
  font-size: ${theme.typefaces.mobile.heading[3].size};
  font-weight: ${theme.typefaces.mobile.heading[3].weight};
  color: ${theme.light.main_colours.white};
  background: transparent;
  width: 100px;
  height: 40px;
  border: none;
  border: 1px solid ${theme.light.main_colours.white};
  border-radius: 5px;
  margin-left: 15px;

  :hover {
    color: ${theme.light.main_colours.black};
    border: 1px solid ${theme.light.main_colours.black};
    background: ${theme.light.main_colours.white};
  }
`;
