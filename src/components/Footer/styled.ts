import styled from 'styled-components';

export const AllElementsWrapper = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.main_colours.white};
  margin-top: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 86%;
  border-top: 1px solid ${(props) => props.theme.neutral_colours.grey};
  padding-top: 20px;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    flex-direction: row-reverse;
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    flex-direction: column;
  }

  justify-content: space-between;
`;

export const EmailInput = styled.input`
  cursor: pointer;
  height: 30px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.main_colours.black};
  background-color: ${(props) => props.theme.main_colours.white};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
  font-family: ${(props) => props.theme.typefaces.font_primary};

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 60%;
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  }

  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }
`;

export const Buttons = styled.ul`
  padding: 0%;
  display: flex;
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    flex-direction: row;
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    flex-direction: column;
  }
`;

export const Button = styled.li`
  list-style: none;
  text-align: start;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
  padding: 0 45px 20px 0;
  user-select: none;
  cursor: pointer;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }

  :hover{
    color: ${(props) => props.theme.main_colours.black};
  }
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 50%;
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 15px 0 25px 0;
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    display: none;
  }
`;

export const CheckBox = styled.input``;

export const CheckBoxText = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
  font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  color: ${(props) => props.theme.main_colours.black};
`;

export const ContactsWrapper = styled.div`
  display: flex;
  width: 86%;
  padding: 20px 0 20px 0;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    flex-direction: row-reverse;
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    flex-direction: column;
  }

  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    padding-bottom: 50px;
    width: 80%;
  }
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 150px;
  }

  >.svg{
    fill: ${(props) => props.theme.neutral_colours.dark_grey};
  }
`;

export const Text = styled.div`
  user-select: none;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
  font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
`;

export const Span = styled.span`
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    color: ${(props) => props.theme.main_colours.black};
  }
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.neutral_colours.dark_grey};
`;

export const FBPath = styled.path`
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    fill: ${(props) => props.theme.neutral_colours.dark_grey};
  }
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    fill: ${(props) => props.theme.main_colours.black};
  }
`;

export const Icon = styled.svg`
  margin-left: 15px;
`;

export const LNIcon = styled.svg`
  margin-left: 15px;
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }
`;

export const IconsText = styled.div`
  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    display: none;
  }

  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
  font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  color: ${(props) => props.theme.main_colours.black};
`;

export const Line = styled.hr`
  size: 2;
  color: ${(props) => props.theme.main_colours.black};
  align-self: center;
  width: 50px;
  margin: 0%;
  margin-left: 25px;

  @media (width > ${(props) => props.theme.device_sizing.size.laptop}) {
    display: none;
  }
`;

export const EmailButton = styled.button`
  border: 0px;
  border-bottom: 1px solid ${(props) => props.theme.main_colours.black};
  background: transparent;
  padding-bottom: 5px;
`;

export const EmailWithArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
`;
