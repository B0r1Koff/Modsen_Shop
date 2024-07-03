import styled from "styled-components"

export const StyledLabel = styled.label<{ checked: boolean }>`
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
    top: 2px;
    width: 19px;
    height: 19px;
    background: ${(props) => props.theme.main_colours.white};

    ${(props) => !props.checked ?
      `background-image: url("https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-%D0%BB%D1%83%D0%BD%D0%B0-%D1%81-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0%D0%BC%D0%B8-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-134394030.jpg");`  
      :
      `background-image: url("https://cdn.pixabay.com/photo/2013/04/01/21/31/sun-99192_1280.png");`
    }

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 90px;
    border: 1px solid ${(props) => props.theme.main_colours.black};
    transition: 0.3s;
  }
`