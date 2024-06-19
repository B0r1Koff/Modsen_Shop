import {
  SlideWrapper,
  DescriptionWrapper,
  Text,
  Button,
  Price,
} from './styled';

export default function Slide(props: {
  url: string;
  index: number;
  price: number;
  title: string;
}) {
  
  return (
    <SlideWrapper image={props.url} index={props.index}>
      <DescriptionWrapper>
        <Text>{props.title}</Text>
        <Price>$ {props.price}</Price>
        <Button>View Product</Button>
      </DescriptionWrapper>
    </SlideWrapper>
  );
}
