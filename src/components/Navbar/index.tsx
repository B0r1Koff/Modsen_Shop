import { useNavigate } from 'react-router-dom';
import {Nav, HomeLink, ShopName, ShopNameSpan, Header, HeaderButtonsWrapper, CartButton, Path, ShopButton, MenuButton} from "./styled"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ToggleSwitch from '../ToggleSwitch';
import Sidebar from '../Sidebar';
import { switchMenuState, switchProductsState } from 'src/store/store';
import theme from 'src/constants/static_theme';
import { useState, useEffect } from 'react';
import {getProducts} from 'src/utils/getProductsForSlider';

export function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isProfileOpened, setIsProfileOpened] = useState(false)

  useEffect(() => {
    getProducts().then(function(data){dispatch(switchProductsState(data))})
  }, [])

  function onHomeRedirectClick(path: string){
      if(isProfileOpened){
        dispatch(switchMenuState(!isProfileOpened)) 
        setIsProfileOpened(!isProfileOpened)
      }
      navigate(path)
  }

  function onMenuButtonClick(){
    dispatch(switchMenuState(!isProfileOpened)) 
    setIsProfileOpened(!isProfileOpened)
  }

  return (
    <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
      <Header>
        <Nav>
          <HomeLink onClick={e => onHomeRedirectClick("/")}>
            <ShopName className='ShopName'>Modsen S<ShopNameSpan>HOPPE</ShopNameSpan></ShopName>
          </HomeLink>
          <HeaderButtonsWrapper>
            <ShopButton onClick={e => onHomeRedirectClick('/Shop')}>Shop</ShopButton> 
            <ToggleSwitch/>
            <CartButton onClick={e => navigate('/Cart')}>
              <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M6.76598 17.1418H6.76694C6.76774 17.1418 6.76854 17.1416 6.76934 17.1416H17.9238C18.1984 17.1416 18.4399 16.9161 18.5153 16.5892L20.9763 5.92509C21.0293 5.69519 20.9921 5.44803 20.876 5.2572C20.7597 5.06638 20.5778 4.9541 20.3848 4.9541H5.34709L4.90729 2.50371C4.84465 2.15518 4.59503 1.90723 4.30664 1.90723H0.615234C0.275413 1.90723 0 2.24821 0 2.66895C0 3.08968 0.275413 3.43066 0.615234 3.43066H3.81317C3.89104 3.86488 5.91779 15.157 6.03442 15.8066C5.38058 16.1585 4.92187 16.9657 4.92187 17.9033C4.92187 19.1633 5.74988 20.1885 6.76758 20.1885H17.9238C18.2636 20.1885 18.5391 19.8475 18.5391 19.4268C18.5391 19.006 18.2636 18.665 17.9238 18.665H6.76758C6.4284 18.665 6.15234 18.3233 6.15234 17.9033C6.15234 17.484 6.42744 17.1428 6.76598 17.1418ZM19.5691 6.47754L17.4597 15.6182H7.26105L5.62042 6.47754H19.5691Z" fill="black"/>
                <Path d="M6.15234 22.4736C6.15234 23.7336 6.98035 24.7588 7.99805 24.7588C9.01575 24.7588 9.84375 23.7336 9.84375 22.4736C9.84375 21.2136 9.01575 20.1885 7.99805 20.1885C6.98035 20.1885 6.15234 21.2136 6.15234 22.4736ZM7.99805 21.7119C8.33723 21.7119 8.61328 22.0537 8.61328 22.4736C8.61328 22.8936 8.33723 23.2353 7.99805 23.2353C7.65887 23.2353 7.38281 22.8936 7.38281 22.4736C7.38281 22.0537 7.65887 21.7119 7.99805 21.7119Z" fill="black"/>
                <Path d="M14.8477 22.4736C14.8477 23.7336 15.6757 24.7588 16.6934 24.7588C17.7111 24.7588 18.5391 23.7336 18.5391 22.4736C18.5391 21.2136 17.7111 20.1885 16.6934 20.1885C15.6757 20.1885 14.8477 21.2136 14.8477 22.4736ZM16.6934 21.7119C17.0325 21.7119 17.3086 22.0537 17.3086 22.4736C17.3086 22.8936 17.0325 23.2353 16.6934 23.2353C16.3542 23.2353 16.0781 22.8936 16.0781 22.4736C16.0781 22.0537 16.3542 21.7119 16.6934 21.7119Z" fill="black"/>
              </svg>
            </CartButton>   
            <MenuButton onClick={e => onMenuButtonClick()}>
              {!isProfileOpened ? 
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1.62768 2.87494L20.3708 2.87494C20.7157 2.87494 20.9954 2.45491 20.9952 1.93747C20.995 1.41995 20.7149 1 20.3701 1L1.62695 1C1.28207 1 1.00236 1.42003 1.00256 1.93747C1.00276 2.45491 1.28285 2.87494 1.62768 2.87494Z" fill="black" stroke="white" stroke-width="0.2"/>
                <Path d="M20.3706 7.56238L1.62744 7.56238C1.28255 7.56238 1.00285 7.98241 1.00305 8.49984C1.00325 9.01728 1.28333 9.43731 1.62817 9.43731L20.3713 9.43731C20.7162 9.43731 20.9959 9.01728 20.9957 8.49985C20.9955 7.98241 20.7155 7.56238 20.3706 7.56238Z" fill="black" stroke="white" stroke-width="0.2"/>
                <Path d="M20.3702 14.125L7.87499 14.125C7.53011 14.125 7.2504 14.545 7.25059 15.0625C7.25078 15.58 7.53085 15.9999 7.87568 15.9999L20.3709 15.9999C20.7158 15.9999 20.9955 15.5799 20.9953 15.0625C20.9952 14.545 20.7151 14.125 20.3702 14.125Z" fill="black" stroke="white" stroke-width="0.2"/>
              </svg>
              :
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1 1.24459L16.7554 17M1 16.7554L16.7554 1" stroke="black" stroke-width="1.5"/>
              </svg>
            }
            </MenuButton>
          </HeaderButtonsWrapper>
        </Nav>
      </Header>
      <Sidebar isProfileOpened={isProfileOpened} setIsProfileOpened={setIsProfileOpened}/>
    </ThemeProvider>
  );
}

export default Navbar;