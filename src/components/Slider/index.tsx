import { SliderWrapper } from "./styled"
import { useEffect, useState } from 'react';
import { getProducts, Product } from 'src/utils/getProductsForSlider';

export default function Slider(){

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then(function(val){setProducts(val)})
    }, [products])

    return(
        <SliderWrapper image="https://img-blog.csdn.net/20170428150937177?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXV3ZW5xaTEyMzQ1Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast">
        </SliderWrapper>
    )
}