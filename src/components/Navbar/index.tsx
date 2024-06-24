import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchMenuState } from 'src/store/sidebar/sidebarSlice';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import ToggleSwitch from '../ToggleSwitch';
import {ReactComponent as CrossIcon} from "../../assets/Cross.svg"
import {ReactComponent as MenuIcon} from "../../assets/Menu.svg"
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
  Path
} from './styled';
import { CART_ROUTE, HOME_ROUTE, SHOP_ROUTE } from 'src/constants/routes';
import { CartIcon } from 'src/assets/Cart';

export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  return (
    <>
      <Header>
        <Nav>
          <HomeLink onClick={() => onHomeRedirectClick(HOME_ROUTE)}>
            <ShopName className="ShopName">
              Modsen S<ShopNameSpan>HOPPE</ShopNameSpan>
            </ShopName>
          </HomeLink>
          <HeaderButtonsWrapper>
            <ShopButton onClick={() => onHomeRedirectClick(SHOP_ROUTE)}>
              Shop
            </ShopButton>
            <ToggleSwitch />
            <CartButton onClick={() => navigate(CART_ROUTE)}>
              <CartIcon Path={Path}/>  
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
