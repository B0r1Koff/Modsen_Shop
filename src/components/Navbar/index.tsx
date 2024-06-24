import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchMenuState } from 'src/store/sidebar/sidebarSlice';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import ToggleSwitch from '../ToggleSwitch';
import {ReactComponent as CrossIcon} from "../../assets/Cross.svg"
import {ReactComponent as MenuIcon} from "../../assets/Menu.svg"
import {ReactComponent as CartIcon} from "../../assets/shopping_cart.svg"
import {
  Nav,
  HomeLink,
  ShopName,
  ShopNameSpan,
  Header,
  HeaderButtonsWrapper,
  CartButton,
  ShopButton,
  MenuButton,
} from './styled';

export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  return (
    <>
      <Header>
        <Nav>
          <HomeLink onClick={() => onHomeRedirectClick('/')}>
            <ShopName className="ShopName">
              Modsen S<ShopNameSpan>HOPPE</ShopNameSpan>
            </ShopName>
          </HomeLink>
          <HeaderButtonsWrapper>
            <ShopButton onClick={() => onHomeRedirectClick('/Shop')}>
              Shop
            </ShopButton>
            <ToggleSwitch />
            <CartButton onClick={() => navigate('/Cart')}>
              <CartIcon/>
            </CartButton>
            <MenuButton onClick={() => onMenuButtonClick()}>
              {!isProfileOpened ? (
                <MenuIcon/>
              ) : (
                <CrossIcon/>
              )}
            </MenuButton>
          </HeaderButtonsWrapper>
        </Nav>
      </Header>
      <Sidebar
        isProfileOpened={isProfileOpened}
        setIsProfileOpened={setIsProfileOpened}
      />
    </>
  );

  function onHomeRedirectClick(path: string) {
    if (isProfileOpened) {
      dispatch(switchMenuState(!isProfileOpened));
      setIsProfileOpened(!isProfileOpened);
    }
    navigate(path);
  }

  function onMenuButtonClick() {
    dispatch(switchMenuState(!isProfileOpened));
    setIsProfileOpened(!isProfileOpened);
  }
}

export default Navbar;
