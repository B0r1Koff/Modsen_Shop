import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { ContentWrapper, Content } from './styled';
import Slider from 'src/components/Slider';

export function Home() {
  
  return (
    <ContentWrapper>
      <Navbar/>
      <Content>
        <Slider/>
      </Content>
      <Footer/>
    </ContentWrapper>
  );
}

export default Home;