import styled from "styled-components"

export const StyledLabel = styled.label<{ checked: boolean }>`
  @media (width < ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }
  user-select: none;
  cursor: pointer;
  text-indent: -9999px;
  margin: 0 0 13px 30px;
  width: 45px;
  height: 25px;
  background: ${(props) => props.theme.neutral_colours.dark_grey};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '50%' : '4px')};
    top: 3px;
    width: 19px;
    height: 19px;
    background: ${(props) => props.theme.main_colours.white};
    border-radius: 90px;
    transition: 0.3s;
  }
`