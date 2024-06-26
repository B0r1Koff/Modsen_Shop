import { useEffect, useState } from 'react';
import { Product } from 'src/utils/getProductsForSlider';
import { store } from 'src/store/store';
import { useSelector } from 'react-redux';
import Slide from '../Slide';
import {
  SliderWrapper,
  SliderScroller,
  ButtonsWrapper,
  Button,
} from './styled';
import {ReactComponent as EllipseIcon} from "../../assets/Ellipse.svg"
import {ReactComponent as EllipseActiveIcon} from "../../assets/EllipseActive.svg"

export default function Slider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProducts(store.getState().products.value.slice(0, 5));
    }, 100);
  }, [products]);

  return (
    <SliderWrapper
      isOpened={useSelector((state: any) => state.isMenuOpened.value)}
    >
      {products.length > 0 && (
        <SliderScroller>
          {products.map((prod) => {
            return (
              <Slide
                key={prod.id}
                id={prod.id}
                url={prod.image}
                index={sliderIndex}
                price={prod.price}
                title={prod.title}
              />
            );
          })}
        </SliderScroller>
      )}
      <ButtonsWrapper>
        {products.map((_, index) => {
          return (
            <Button key={index} onClick={() => setSliderIndex(index)}>
              {index === sliderIndex ? (
                <EllipseActiveIcon/>
              ) : (
                <EllipseIcon/>
              )}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </SliderWrapper>
  );
}
