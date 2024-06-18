import styled from 'styled-components';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.div`
  margin-top: 20vh;
`

export function Shop() {
  return (
    <StyledApp>
      <Navbar/>
      <Div>
        Shop
      </Div>
      <Footer/>
    </StyledApp>
  );
}

export default Shop;