import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Product } from 'src/utils/getProductsForSlider';
import { useState, useEffect } from 'react';
import { store } from 'src/store/store';
import ProductCard from '../ProductCard';
import {
  ShopTheLatestWrapper,
  HeadButtons,
  HeadLink,
  ViewAllLink,
  CardsContainer,
} from './styled';

export default function ShopTheLatest() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(store.getState().products.value.slice(0, 6));
    }, 0);
  }, [products]);

  return (
      <ShopTheLatestWrapper
        isOpened={useSelector((state: any) => state.isMenuOpened.value)}
      >
        <HeadButtons>
          <HeadLink>Shop The Latest</HeadLink>
          <ViewAllLink onClick={() => navigate('/Shop')}>View All</ViewAllLink>
        </HeadButtons>
        {products.length > 0 && (
          <CardsContainer>
            {products.map(({id, image, price, title}) => {
              return (
                <ProductCard
                  key={id}
                  url={image}
                  price={price}
                  name={title}
                />
              );
            })}
          </CardsContainer>
        )}
      </ShopTheLatestWrapper>
  );
}
