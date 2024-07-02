import { Routes, Route } from "react-router"
import Home from "src/pages/Home"
import Shop from "src/pages/Shop"
import { Cart } from "src/pages/Cart"
import { ErrorPage } from "src/pages/ErrorPage"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "src/utils/getProductsForSlider"
import { useDispatch } from "react-redux"
import { switchProductsState } from "src/store/products/productsSlice"
import { routes } from "src/constants/routes"
import { ProductPage } from "src/pages/Product"
import { RESERVE_PRODUCTS_ARRAY } from "src/constants/reserveProducts"
import { store } from "src/store/store"
import { ContactUs } from "src/pages/ContactUs"

export function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then(function (data) {
            dispatch(switchProductsState(data));
        });
        if(store.getState().products.value.length === 0){
            dispatch(switchProductsState(RESERVE_PRODUCTS_ARRAY));
        }       
    }, []);

    return(
        <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
            <>
                <Routes>
                    <Route path={routes.ERROR_ROUTE} element={<ErrorPage/>} />
                    <Route path={routes.HOME_ROUTE} element={<Home/>} />
                    <Route path={routes.SHOP_ROUTE} element={<Shop/>} />
                    <Route path={routes.CART_ROUTE} element={<Cart/>} />
                    <Route path={routes.PRODUCT_ROUTE + "/:productId"} element={<ProductPage/>}/>
                    <Route path={routes.CONTACT_US_ROUTE} element={<ContactUs/>}/>
                </Routes>
            </>
        </ThemeProvider>)
}