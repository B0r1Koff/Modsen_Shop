import { Routes, Route } from "react-router"
import Home from "src/pages/Home"
import Shop from "src/pages/Shop"
import Cart from "src/pages/Cart"
import { ErrorPage } from "src/pages/ErrorPage/ErrorPage"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "src/utils/getProductsForSlider"
import { useDispatch } from "react-redux"
import { switchProductsState } from "src/store/products/productsSlice"

export function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then(function (data) {
          dispatch(switchProductsState(data));
        });
      }, []);

    return(
        <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
            <>
                <Routes>
                    <Route path='*' element={<ErrorPage/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='/Shop' element={<Shop/>} />
                    <Route path='/Cart' element={<Cart/>} />
                </Routes>
            </>
        </ThemeProvider>)
}