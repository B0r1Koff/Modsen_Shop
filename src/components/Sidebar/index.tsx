import { ThemeProvider } from 'styled-components';
import { Bar, ButtonsWrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { switchMenuState } from 'src/store/store';

export default function Sidebar(props: {
  isProfileOpened: boolean;
  setIsProfileOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onRedirectClick(path: string) {
    dispatch(switchMenuState(!props.isProfileOpened));
    props.setIsProfileOpened(!props.isProfileOpened);
    navigate(path);
  }

  return (
    <ThemeProvider
      theme={useSelector((state: any) => state.currentTheme.value)}
    >
      <Bar isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
        <ButtonsWrapper>
          <Button onClick={(e) => onRedirectClick('/')}>Home</Button>
          <Button onClick={(e) => onRedirectClick('/Shop')}>Shop</Button>
          <Button onClick={(e) => onRedirectClick('/')}>Contact</Button>
        </ButtonsWrapper>
      </Bar>
    </ThemeProvider>
  );
}
