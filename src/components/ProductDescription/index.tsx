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
    CategoriesText,
    AddToCartButton,
} from "./styled"
import { StarIcon } from "src/assets/Star"
import { useState } from "react"
import { EnvelopeIcon } from "src/assets/Envelope"
import { FacebookIcon } from "src/assets/Facebook"
import { InstagramIcon } from "src/assets/Instagram"
import { TwitterIcon } from "src/assets/Twitter"
import { isItemInCart } from "src/utils/isItemInCart"
import { 
    addToCart, 
    updateCartItem 
} from "src/store/cart/cartSlice"
import { useDispatch } from "react-redux"

interface Props{
    product: Product | undefined
}
export function ProductDescription({product}: Props){
    const [isRatingOpened, setIsRatingOpened] = useState(false)
    const dispatch = useDispatch()

    return(
        <DataWrapper>
            <Name>{product?.title}</Name>
            <Price>$ {product?.price}</Price>
            <AddToCartButton onClick={() => handleAddToCart(Number(product?.id), 1)}>
                {isItemInCart(Number(product?.id)) ? "В корзину" : "Из корзины"}
            </AddToCartButton>
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

    function handleAddToCart(productId: number, quantity: number){
        dispatch(addToCart({ productId, quantity }));
    };

    function handleUpdateCartItem(productId: number, quantity: number){
        dispatch(updateCartItem({ productId, quantity }));
    };
}