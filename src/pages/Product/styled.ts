import styled from "styled-components";

export const ProductPageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.main_colours.white};
`;

export const ContentWrapper = styled.div`
    width: 86%;
    margin-top: 8vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        flex-direction: row;
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        flex-direction: column;
    }
`

