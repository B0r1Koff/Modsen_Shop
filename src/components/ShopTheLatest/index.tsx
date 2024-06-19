import { ShopTheLatestWrapper, HeadButtons, HeadLink, ViewAllLink, CardsContainer } from "./styled"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { Product } from 'src/utils/getProductsForSlider';
import { useState, useEffect } from "react";
import { store } from "src/store/store";
import ProductCard from "../ProductCard";

export default function ShopTheLatest(){
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setTimeout(() => {
          setProducts(store.getState().products.value.slice(0,6));
        }, 100);
      }, [products]);

    return(
        <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
            <ShopTheLatestWrapper isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
                <HeadButtons>
                    <HeadLink>Shop The Latest</HeadLink>
                    <ViewAllLink onClick={e => navigate("/Shop")}>View All</ViewAllLink>
                </HeadButtons>
                {products.length > 0 &&
            <CardsContainer>
                {
                    products.map((product, index) => {
                        return <ProductCard key={index} url={product.image} price={product.price} name={product.title}/>
                    })
                } 
            </CardsContainer>
            }
            </ShopTheLatestWrapper>
        </ThemeProvider>
    )
}