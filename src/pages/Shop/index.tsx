import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { store } from 'src/store/store';
import { Product } from 'src/utils/getProductsForSlider';
import ProductCard from 'src/components/ProductCard';
import { RangeInputComponent } from 'src/components/RangeInput';
import Filter from "../../assets/Filter.svg"
import {
  ShopPage,
  ContentWrapper,
  Text,
  ShopContent,
  CardsWrapper,
  FiltersWrapper,
  SearchBar,
  FilterSelect,
  CloseFilterButton,
  LowElementsWrapper,
  SearchBarWrapper,
  HighElementsWrapper,
  PriceText,
  Path
} from './styled';
import { MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE } from 'src/constants/price';
import {ReactComponent as LoopeIcon} from "../../assets/LUPA.svg"
import { LoupeIcon } from 'src/assets/Loupe';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState(MIN_PRODUCT_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRODUCT_PRICE);
  const [shopByValue, setShopByValue] = useState("none")
  const [productNameInput, setProductNameInput] = useState("")
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setProducts(store.getState().products.value.slice(0, store.getState().products.value.length));
    }, 0);
  }, [products]);
  
  return (
      <ShopPage>
        <Navbar />
        <ContentWrapper
          isOpened={useSelector((state: any) => state.isMenuOpened.value)}
        >
          <Text>Shop</Text>
          <ShopContent>
            <FiltersWrapper>
              <HighElementsWrapper isFiltersSectionOpened={isFilterSectionOpen}>
                <SearchBarWrapper>
                  <SearchBar placeholder="Search..." onChange={e => {setProductNameInput(e.target.value)}}/>
                  <LoupeIcon Path={Path}/>
                </SearchBarWrapper>
                <FilterSelect onChange={e => setShopByValue(e.target.value)}>
                  <option hidden={shopByValue === "none"}>{shopByValue === "none" ? "Shop By" : "none"}</option>
                  {createShopByOptions()}
                </FilterSelect>
                <FilterSelect>
                  <option>Sort By</option>
                </FilterSelect>

                <RangeInputComponent
                  max={maxPrice}
                  min={minPrice}
                  setMin={setMinPrice}
                  setMax={setMaxPrice}
                />
              </HighElementsWrapper>
              
              <LowElementsWrapper>
                <PriceText isFiltersSectionOpened={isFilterSectionOpen}>
                  Price: ${minPrice} - ${maxPrice}
                </PriceText>
                <CloseFilterButton onClick={() => {setIsFilterSectionOpen(!isFilterSectionOpen)}}>
                  <img src={Filter} />
                  <p>Filter</p>
                </CloseFilterButton>
              </LowElementsWrapper>
            </FiltersWrapper>
            {products.length > 0 && (
              <CardsWrapper isFiltersSectionOpened={isFilterSectionOpen}>
                {products.map(({id, image, price, title, category}) => {
                  if (checkFilters(category, title, price)) {
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
              </CardsWrapper>
            )}
          </ShopContent>
        </ContentWrapper>
        <Footer />
      </ShopPage>
  );

  function createShopByOptions(){
    return Array.from(new Set(products.map(product => {return product.category}))).map(element => {return <option key={element}>{element}</option>})
  }

  function createSortByOptions(){
    return Array.from(new Set(products.map(product => {return product.rating}))).map(element => {return <option>{element.toString()}</option>})
  }

  function checkFilters(category: string, title: string, price: number){
      if (
        price <= maxPrice &&
        price >= minPrice &&
        title.toLowerCase().includes(productNameInput.toLowerCase()) &&
        (shopByValue !== "none" ? category === shopByValue : category)
      ) {
        return true
      }
      return false
  }
}
