import styled from 'styled-components';

export const ShopPage = styled.div`
  background-color: ${(props) => props.theme.main_colours.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

interface ShopMenuState {
  isOpened: boolean;
}

interface isFiltersOpened{
  isFiltersSectionOpened: boolean
}


export const ContentWrapper = styled.div<ShopMenuState>`
  width: 86%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.isOpened &&
    `
        display: none;
  `}
`;

export const Text = styled.p`
  user-select: none;
  width: 100%;
  text-align: start;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.main_colours.black};

  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[1].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
    font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
  }
`;

export const ShopContent = styled.div`
  width: 100%;
  display: flex;
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    flex-direction: row;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    flex-direction: column;
  }
  height: fit-content;
`;

export const FiltersWrapper = styled.div`
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    width: 20%;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
  }
  height: fit-content;
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 10px;
    width: 100%;
  }

  animation: ani 1s forwards;

  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`;

export const CardsWrapper = styled.div<isFiltersOpened>`
  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    ${(props) => !props.isFiltersSectionOpened ? `width: 95%;` : `width: 80%;`}
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
  }
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: fit-content;
  border-bottom: 1px solid ${(props) => props.theme.neutral_colours.grey};
  margin-bottom: 20px;

  >.svg{
     position: absolute;
     fill: ${(props) => props.theme.main_colours.black};
  }
`;

export const SearchBarImg = styled.svg`
 
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.main_colours.black};
`;

export const SearchBar = styled.input`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  color: ${(props) => props.theme.neutral_colours.grey};
  background-color: ${(props) => props.theme.main_colours.white};
`;

export const FilterSelect = styled.select`
    cursor: pointer;
    margin-top: 10px;
    height: 40px;
    outline: none;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    background-color: ${(props) => props.theme.main_colours.white};
    border: 1px solid ${(props) => props.theme.neutral_colours.grey};
    border-radius: 5px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
      font-size: ${(props) => props.theme.typefaces.pc.body.medium.size};
      font-weight: ${(props) => props.theme.typefaces.pc.body.medium.weight};
    }
    
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
      font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
      font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }
`;

export const CloseFilterButton = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50px;

  >*{
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.accent};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
      font-size: ${(props) => props.theme.typefaces.pc.body.medium.size};
      font-weight: ${(props) => props.theme.typefaces.pc.body.medium.weight};
    }
    
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
      font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
      font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }
  }
  
`;

export const LowElementsWrapper = styled.div`
  margin: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HighElementsWrapper = styled.div<isFiltersOpened>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => !props.isFiltersSectionOpened && `display: none;`}
`

export const PriceText = styled.p<isFiltersOpened>`
  user-select: none;
  ${(props) => !props.isFiltersSectionOpened && `display: none;`}

  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.neutral_colours.dark_grey};

  @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
    font-size: ${(props) => props.theme.typefaces.pc.body.medium.size};
    font-weight: ${(props) => props.theme.typefaces.pc.body.medium.weight};
  }
    
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }  
`;