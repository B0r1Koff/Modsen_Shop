import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar';


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export function Shop() {
  return (
    <StyledApp>
      <Navbar/>
      bbb
    </StyledApp>
  );
}

export default Shop;