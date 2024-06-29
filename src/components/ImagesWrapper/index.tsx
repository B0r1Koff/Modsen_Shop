import { Product } from "src/utils/getProductsForSlider"
import { 
    ImagesWrapperContent, 
    ImagesContainer, 
    SmallImage, 
    LargeImage, 
    LargeImageMobile, 
    LargeImageButton, 
    MobileImagesWrapper, 
    ImageScaleWrapper, 
    Scale } from "./styled"
import { useState } from "react"

interface Props{
    product: Product | undefined
}

export function ImagesWrapper({product} : Props){
    let productImages = Array(4).fill(product?.image)
    productImages.push("https://ih1.redbubble.net/image.446304524.2298/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg")
    const [selectedMobileImageIndex, setSelectedMobileImageIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return(
        <ImagesWrapperContent>
            <ImagesContainer>
                {productImages.map((item, index) => {
                    if(index !== selectedImageIndex){
                        return(
                            <SmallImage key={index} src={item} onClick={() => {setSelectedImageIndex(index)}}/>
                        )
                    }     
                })}
            </ImagesContainer>
            <LargeImage src={productImages[selectedImageIndex]}/>
            <MobileImagesWrapper>
                {productImages.map((item, index) => {
                    return(
                        <LargeImageMobile key={index} src={item} index={selectedMobileImageIndex}>
                            <LargeImageButton onClick={setPrevIndex}>{"<"}</LargeImageButton>
                            <LargeImageButton onClick={setNextIndex}>{">"}</LargeImageButton>
                        </LargeImageMobile>
                    )
                })}
            </MobileImagesWrapper>
            <ImageScaleWrapper>
                <Scale index={selectedMobileImageIndex}/>
            </ImageScaleWrapper>
        </ImagesWrapperContent>
    )

    function setNextIndex(){
        if(selectedMobileImageIndex === 4){
            setSelectedMobileImageIndex(0)
        }
        else setSelectedMobileImageIndex(selectedMobileImageIndex+1)
        
    }

    function setPrevIndex(){
        if(selectedMobileImageIndex === 0){
            setSelectedMobileImageIndex(4)
        }
        else setSelectedMobileImageIndex(selectedMobileImageIndex-1)
    }
}