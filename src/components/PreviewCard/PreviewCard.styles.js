import styled from "styled-components";
import { Container } from "../../theme/Style";

export const PreviewCardWrapper = styled(Container)`
  display: flex;
  height: 500px;
  border-radius: 1rem;
`;

export const PreviewCardColOne = styled.div`
  flex: 1;
  width: 50%;
`;

export const PreviewCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const PreviewCardColTwo = styled.div`
  flex: 1;
  width: 50%;
`;

export const PreviewCardSubHeading = styled.h4``;

export const PreviewCardHeading = styled.h1``;

export const PreviewCardContent = styled.p``;

export const PreviewCardPrice = styled.span``;

export const PreviewCardOldPrice = styled.span``;

export const PreviewCardPrices = styled.div``;
