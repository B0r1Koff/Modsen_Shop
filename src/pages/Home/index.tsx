import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { ContentWrapper, Content } from './styled';
import Slider from 'src/components/Slider';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import ShopTheLatest from 'src/components/ShopTheLatest';

export function Home() {
  return (
    <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
      <ContentWrapper>
        <Navbar />
        <Content>
          <Slider />
          <ShopTheLatest/>
        </Content>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
    
  );
}

export default Home;
