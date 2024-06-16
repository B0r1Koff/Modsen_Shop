import { useNavigate, useNavigation } from 'react-router-dom';
import {Nav, HomeLink, ShopName, ShopNameSpan, Header, HeaderButtonsWrapper, CartButton, CartImg, ShopButton} from "./styled"
import shopping_cart from "../../assets/shopping_cart.png"
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import ToggleSwitch from './toggleSwitch';

export function Navbar() {
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
      <Header>
        <Nav>
          <HomeLink onClick={e => navigate('/')}>
            <ShopName className='ShopName'>Modsen S<ShopNameSpan>HOPPE</ShopNameSpan></ShopName>
          </HomeLink>
          <HeaderButtonsWrapper>
            <ShopButton onClick={e => navigate('/Shop')}>Shop</ShopButton> 
            <ToggleSwitch/>
            <CartButton onClick={e => navigate('/')}><CartImg src={shopping_cart} alt=""/></CartButton>   
          </HeaderButtonsWrapper>
        </Nav>
      </Header>
    </ThemeProvider>
    
  );
}

export default Navbar;