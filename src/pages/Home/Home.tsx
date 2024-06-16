import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar';


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export function Home() {
  return (
    <StyledApp>
      <Navbar/>
      aaa
    </StyledApp>
  );
}

export default Home;