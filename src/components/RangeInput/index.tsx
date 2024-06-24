import { useState } from 'react';
import {
  RangeInput,
  RangeInputWrapper,
  RangeSelected,
  RangeSlider,
  ContentWrapper,
} from './styled';
import { MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE } from 'src/constants/price';

interface Props{
  max: number;
  min: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  setMax: React.Dispatch<React.SetStateAction<number>>;
}

export function RangeInputComponent({max, min, setMin, setMax} : Props) {
  const [firstValue, setFirstValue] = useState(min);
  const [secondvalue, setSecondValue] = useState(max);

  return (
      <ContentWrapper>
        <RangeSlider>
          <RangeSelected min={min} max={max} />
        </RangeSlider>

        <RangeInputWrapper>
          <RangeInput
            type="range"
            value={min}
            min={MIN_PRODUCT_PRICE}
            max={MAX_PRODUCT_PRICE}
            onChange={(e) => {
              setFirstValue(Number(e.target.value));
              if (firstValue > secondvalue) setMax(firstValue);
              else setMin(firstValue);
            }}
          />
          <RangeInput
            type="range"
            value={max}
            min={MIN_PRODUCT_PRICE}
            max={MAX_PRODUCT_PRICE}
            onChange={(e) => {
              setSecondValue(Number(e.target.value));
              if (secondvalue > firstValue) setMax(secondvalue);
              else setMin(secondvalue);
            }}
          />
        </RangeInputWrapper>
      </ContentWrapper>
  );
}
