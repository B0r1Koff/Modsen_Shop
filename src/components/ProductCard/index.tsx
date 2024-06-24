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

interface Props{
  name: string;
  price: number;
  url: string;
}

export default function ProductCard({name, price, url} : Props) {
  return (
      <CardContentWrapper>
        <TextWrapper>
          <Image image={url} />
          <Name>{name}</Name>
          <Price>$ {price}</Price>
        </TextWrapper>
        <AddToCartButton>
          <HoverButton><CartIcon/></HoverButton>
          <HoverButton><EyeIcon/></HoverButton>
        </AddToCartButton>
      </CardContentWrapper>
  );
}
