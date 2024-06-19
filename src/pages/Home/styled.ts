import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${props => props.theme.main_colours.white};
`;

export const Content = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: center;
`;
