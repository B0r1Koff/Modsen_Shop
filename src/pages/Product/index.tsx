import styled from 'styled-components';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { useParams } from 'react-router';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.div`
  margin-top: 20vh;
`;

export function Product() {
    const {id} = useParams()

    return (
        <StyledApp>
            <Navbar />
            <Div>{id}</Div>
            <Footer />
        </StyledApp>
    );
}