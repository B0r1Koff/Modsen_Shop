import { Product } from "src/utils/getProductsForSlider"
import { 
    DataWrapper, 
    Name, 
    Price, 
    RatingWrapper, 
    StarPath, 
    ReviewsData, 
    RatingNumber, 
    ReviewsText, 
    ViewMoreButton, 
    ViewMoreButtonSpan, 
    ViewMoreButtonText,
    SocialNetworksIconsWrapper,
    Path,
    CategoriesSpan, 
    CategoriesText
} from "./styled"
import { StarIcon } from "src/assets/Star"
import { useState } from "react"
import { EnvelopeIcon } from "src/assets/Envelope"
import { FacebookIcon } from "src/assets/Facebook"
import { InstagramIcon } from "src/assets/Instagram"
import { TwitterIcon } from "src/assets/Twitter"

interface Props{
    product: Product | undefined
}
export function ProductDescription({product}: Props){
    const [isRatingOpened, setIsRatingOpened] = useState(false)
    return(
        <DataWrapper>
            <Name>{product?.title}</Name>
            <Price>$ {product?.price}</Price>
            <RatingWrapper isOpened={isRatingOpened}>
                <ReviewsData isOpened={isRatingOpened}>
                    <StarIcon Path={StarPath}/>
                    <RatingNumber>
                        {product?.rating.rate}
                    </RatingNumber>
                    <ReviewsText>
                        {product?.rating.count + " customer reviews"}
                    </ReviewsText>
                </ReviewsData>
                <ReviewsText>
                    {product?.description}
                </ReviewsText>
                <SocialNetworksIconsWrapper>
                    <EnvelopeIcon Path={Path}/>
                    <FacebookIcon Path={Path}/>
                    <InstagramIcon Path={Path}/>
                    <TwitterIcon Path={Path}/>
                </SocialNetworksIconsWrapper>
                <CategoriesText>
                    Categories:
                    <CategoriesSpan>
                        {product?.category}
                    </CategoriesSpan>
                </CategoriesText>
            </RatingWrapper>
            <ViewMoreButton onClick={() => setIsRatingOpened(!isRatingOpened)}>
                <ViewMoreButtonText>
                    {isRatingOpened ? "Hide" : "View more"}
                    <ViewMoreButtonSpan>
                        {" >"}
                    </ViewMoreButtonSpan>
                </ViewMoreButtonText>
            </ViewMoreButton>
        </DataWrapper>
    )
}