import { Product } from "src/utils/getProductsForSlider"
import { ImagesWrapperContent, ImagesContainer, SmallImage, LargeImage } from "./styled"

interface Props{
    product: Product | undefined
}

export function ImagesWrapper({product} : Props){
    return(
        <ImagesWrapperContent>
            <ImagesContainer>
                <SmallImage src={product?.image}/>
                <SmallImage src={product?.image}/>
                <SmallImage src={product?.image}/>
                <SmallImage src={product?.image}/>
            </ImagesContainer>
            <LargeImage src={product?.image}/>
        </ImagesWrapperContent>
    )
}