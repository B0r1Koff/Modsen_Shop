import { switchTheme } from '../../store/store';
import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import theme from '../../constants/static_theme';

export default function ToggleSwitch() {
  const dispatch = useDispatch();

  const [switchState, setSwitchState] = useState(false);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSwitchState(!switchState);
    dispatch(switchTheme(switchState === true ? theme.light : theme.dark));
  }

  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}

const StyledLabel = styled.label<{ checked: boolean }>`
  @media (width < ${theme.device_sizing.size.tablet}) {
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
`;
