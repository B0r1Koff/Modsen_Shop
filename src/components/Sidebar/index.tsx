import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { switchMenuState } from 'src/store/sidebar/sidebarSlice';
import { Bar, ButtonsWrapper, Button } from './styled';
import { HOME_ROUTE, SHOP_ROUTE } from 'src/constants/routes';

interface Props{
  isProfileOpened: boolean;
  setIsProfileOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({isProfileOpened, setIsProfileOpened} : Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onRedirectClick(path: string) {
    dispatch(switchMenuState(!isProfileOpened));
    setIsProfileOpened(!isProfileOpened);
    navigate(path);
  }

  return (
      <Bar isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
        <ButtonsWrapper>
          <Button onClick={() => onRedirectClick(HOME_ROUTE)}>Home</Button>
          <Button onClick={() => onRedirectClick(SHOP_ROUTE)}>Shop</Button>
          <Button onClick={() => onRedirectClick(HOME_ROUTE)}>Contact</Button>
        </ButtonsWrapper>
      </Bar>
  );
}
