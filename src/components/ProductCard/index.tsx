import {
  CardContentWrapper,
  Image,
  TextWrapper,
  Price,
  Name,
  AddToCartButton,
  HoverButton,
} from './styled';
import {ReactComponent as CartIcon} from "../../assets/shopping_cart.svg"
import {ReactComponent as EyeIcon} from "../../assets/Eye.svg"
import { useNavigate } from 'react-router';
import { PRODUCT_ROUTE } from 'src/constants/routes';
import { useDispatch } from 'react-redux';
import { addToCart } from 'src/store/cart/cartSlice';

interface Props{
  name: string;
  price: number;
  url: string;
  id: number;
}

export default function ProductCard({name, price, url, id} : Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
      <CardContentWrapper>
        <TextWrapper>
          <Image image={url} />
          <Name>{name}</Name>
          <Price>$ {price}</Price>
        </TextWrapper>
        <AddToCartButton>
          <HoverButton onClick={() => handleAddToCart(id, 1)}>
            <CartIcon/>
          </HoverButton>
          <HoverButton onClick={() => navigate(PRODUCT_ROUTE + "/" + id)}>
            <EyeIcon/>
          </HoverButton>
        </AddToCartButton>
      </CardContentWrapper>
  );

  function handleAddToCart(productId: number, quantity: number){
    dispatch(addToCart({ productId, quantity }));
  };
}
