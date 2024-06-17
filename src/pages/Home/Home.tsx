import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar';


const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.div`
  margin-top: 20vh;
`

export function Home() {
  return (
    <StyledApp>
      <Navbar/>
      <Div>
        Home
      </Div>
    </StyledApp>
  );
}

export default Home;