import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function ErrorPage() {
  return (
    <StyledApp>
      <Link to="/">Home</Link>
    </StyledApp>
  );
}

export default ErrorPage;
