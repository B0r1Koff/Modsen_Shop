import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchMenuState } from 'src/store/sidebar/sidebarSlice';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import ToggleSwitch from '../ToggleSwitch';
import { useSelector } from 'react-redux';
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
  Path,
  CrossPath,
  NumberOfCartElements
} from './styled';
import { routes } from 'src/constants/routes';
import { CartIcon } from 'src/assets/Cart';
import { store } from 'src/store/store';
import { MenuIcon } from 'src/assets/Menu';
import { CrossIcon } from 'src/assets/Cross';

export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  return (
    <>
      <Header>
        <Nav>
          <HomeLink onClick={() => onHomeRedirectClick(routes.HOME_ROUTE)}>
            <ShopName className="ShopName">
              Modsen S<ShopNameSpan>HOPPE</ShopNameSpan>
            </ShopName>
          </HomeLink>
          <HeaderButtonsWrapper>
            <ShopButton isOpened={window.location.pathname === routes.SHOP_ROUTE} onClick={() => onHomeRedirectClick(routes.SHOP_ROUTE)}>
              Shop
            </ShopButton>
            <ToggleSwitch />
            <CartButton isOpened={window.location.pathname === routes.CART_ROUTE} onClick={() => navigate(routes.CART_ROUTE)}>
              <CartIcon Path={Path}/>
              <NumberOfCartElements 
                number={useSelector((state: any) => state.cart.items)}
                isActive={store.getState().cart.items.length === 0}
              >
                {store.getState().cart.items.length}
              </NumberOfCartElements>  
            </CartButton>
            <MenuButton onClick={() => onMenuButtonClick()}>
              {!isProfileOpened ? (
                <MenuIcon Path={Path}/>
              ) : (
                <CrossIcon Path={CrossPath}/>
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
