import {
  SlideWrapper,
  DescriptionWrapper,
  Text,
  Button,
  Price,
} from './styled';
import { useNavigate } from 'react-router';
import { routes } from 'src/constants/routes';

interface Props{
  id: number,
  url: string;
  index: number;
  price: number;
  title: string;
}

export default function Slide({id, url, index, price, title} : Props) {
  const navigate = useNavigate()
    return (
    <SlideWrapper image={url} index={index}>
      <DescriptionWrapper>
        <Text>{title}</Text>
        <Price>$ {price}</Price>
        <Button onClick={() => navigate(routes.PRODUCT_ROUTE + "/" + id)}>View Product</Button>
      </DescriptionWrapper>
    </SlideWrapper>
  );
}
