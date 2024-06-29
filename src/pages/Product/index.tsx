import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { useParams } from 'react-router';
import { 
  ProductPageWrapper, 
  ContentWrapper, 
  DescriptionWrapper,
  DescriptionTitle,
  DescriptionScaleWrapper,
  Scale,
  DescriptionText,
  DescriptionButton,
  Path,
  SimilarItemsWrapper,
  SimilarItemsTitle
} from './styled';
import { useState, useEffect } from 'react';
import { Product } from 'src/utils/getProductsForSlider';
import { store } from 'src/store/store';
import { ProductDescription } from 'src/components/ProductDescription';
import { ImagesWrapper } from 'src/components/ImagesWrapper';
import { useSelector } from 'react-redux';
import { DescriptionButtonIconTop } from 'src/assets/DescriptionButtonIconTop';
import { DescriptionButtonIconBottom } from 'src/assets/DescriptionButtonIconBottom';
import ProductCard from 'src/components/ProductCard';

export function ProductPage() {
    const {productId} = useParams()
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>();
    const [isDescriptionOpened, setIsDescriptionOpened] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setProducts(store.getState().products.value.slice(0, store.getState().products.value.length));
        products.map(prod => {if(prod.id === Number(productId)){setProduct(prod)}})
      }, 0);
    }, [products]);

    return (
        <ProductPageWrapper>
            <Navbar />
            <ContentWrapper isMenuOpened={useSelector((state: any) => state.isMenuOpened.value)}>
              <DescriptionWrapper>
                <ImagesWrapper product={product}/>
                <ProductDescription product={product}/>
              </DescriptionWrapper>
              <DescriptionTitle>Description</DescriptionTitle>
              <DescriptionScaleWrapper>
                <Scale/>
              </DescriptionScaleWrapper>
              <DescriptionText isOpened={isDescriptionOpened}>
                {product?.description}
              </DescriptionText>
              <DescriptionButton 
              isOpened={isDescriptionOpened} 
              onClick={() => {setIsDescriptionOpened(!isDescriptionOpened)}}
              >
                Description
                {
                  isDescriptionOpened ? <DescriptionButtonIconTop Path={Path}/> : <DescriptionButtonIconBottom Path={Path}/>
                }
              </DescriptionButton>
              <SimilarItemsTitle>Similar items</SimilarItemsTitle>
              <SimilarItemsWrapper>
                {products.map(({id, image, price, title, category}) => {
                  if (category === product?.category && id !== Number(productId)) {
                    return (
                      <ProductCard
                        key={id}
                        url={image}
                        price={price}
                        name={title}
                        id={id}
                      />
                    );
                  }
                })}
              </SimilarItemsWrapper>
            </ContentWrapper>
            <Footer />
        </ProductPageWrapper>
    );
}