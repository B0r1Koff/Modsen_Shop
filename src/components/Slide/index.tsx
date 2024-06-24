import {
  SlideWrapper,
  DescriptionWrapper,
  Text,
  Button,
  Price,
} from './styled';

interface Props{
  url: string;
  index: number;
  price: number;
  title: string;
}

export default function Slide({url, index, price, title} : Props) {
  return (
    <SlideWrapper image={url} index={index}>
      <DescriptionWrapper>
        <Text>{title}</Text>
        <Price>$ {price}</Price>
        <Button>View Product</Button>
      </DescriptionWrapper>
    </SlideWrapper>
  );
}
