import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Slider from 'src/components/Slider';
import ShopTheLatest from 'src/components/ShopTheLatest';
import { ContentWrapper, Content } from './styled';

export function Home() {
  return (
    <ContentWrapper>
      <Navbar />
      <Content>
        <Slider />
        <ShopTheLatest />
      </Content>
      <Footer />
    </ContentWrapper>
  );
}

export default Home;
