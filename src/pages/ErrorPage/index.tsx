import { ErrorPageWrapper, Container, MainText, MessageText, RedirectButton } from "./styled";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "src/constants/routes";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <ErrorPageWrapper>
      <Navbar/>
      <Container>
        <MainText>
          404 Error
        </MainText>
        <MessageText>
          This page not found;
          <br/>
          back to home and start again
        </MessageText>
        <RedirectButton onClick={() => navigate(HOME_ROUTE)}>
          Homepage
        </RedirectButton>
      </Container>
      <Footer/>
    </ErrorPageWrapper>
  );
}