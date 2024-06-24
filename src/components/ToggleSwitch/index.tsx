import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { switchTheme } from 'src/store/theme/themeSlice';
import theme from '../../constants/static_theme';
import { StyledLabel } from './styled';

export default function ToggleSwitch() {
  const dispatch = useDispatch();

  const [switchState, setSwitchState] = useState(false);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSwitchState(!switchState);
    dispatch(switchTheme(switchState ? theme.light : theme.dark));
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
