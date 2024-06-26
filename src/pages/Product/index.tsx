import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { useParams } from 'react-router';
import { ProductPageWrapper, ContentWrapper, DescriptionWrapper} from './styled';
import { useState, useEffect } from 'react';
import { Product } from 'src/utils/getProductsForSlider';
import { store } from 'src/store/store';
import { ProductDescription } from 'src/components/ProductDescription';
import { ImagesWrapper } from 'src/components/ImagesWrapper';

export function ProductPage() {
    const {id} = useParams()
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
      setTimeout(() => {
        setProducts(store.getState().products.value.slice(0, store.getState().products.value.length));
        products.map(prod => {if(prod.id === Number(id)){setProduct(prod)}})
      }, 0);
    }, [products]);

    return (
        <ProductPageWrapper>
            <Navbar />
            <ContentWrapper>
              <DescriptionWrapper>
                <ImagesWrapper product={product}/>
                <ProductDescription product={product}/>
              </DescriptionWrapper>
            </ContentWrapper>
            <Footer />
        </ProductPageWrapper>
    );
}