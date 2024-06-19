import {
  SliderWrapper,
  SliderScroller,
  ButtonsWrapper,
  Button,
} from './styled';
import { useEffect, useState } from 'react';
import { Product } from 'src/utils/getProductsForSlider';
import Slide from '../Slide';
import { store } from 'src/store/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Slider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProducts(store.getState().products.value.slice(0, 5));
    }, 100);
  }, [products]);

  return (
    <SliderWrapper isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
      {products.length > 0 && (
        <SliderScroller>
          {products.map((prod, index) => {
            return (
              <Slide
                key={index}
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
            <Button key={index} onClick={(e) => setSliderIndex(index)}>
              {index === sliderIndex ? (
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="3.875"
                    stroke="white"
                    stroke-width="0.75"
                  />
                </svg>
              ) : (
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
              )}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </SliderWrapper>
  );
}
