import styled from "styled-components";
import { Container } from "../../theme/Style";

export const PreviewCardWrapper = styled(Container)`
  display: flex;
  height: 500px;

  @media screen and (max-width: 727px) {
    flex-direction: column;
    width: 90%;
    height: 450px;
  }
`;

export const PreviewCardColOne = styled.div`
  width: 50%;

  @media screen and (max-width: 727px) {
    width: 100%;
    height: 300px;
  }
`;

export const PreviewCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @media screen and (max-width: 727px) {
    width: 100%;
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const PreviewCardColTwo = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 1rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  @media screen and (max-width: 727px) {
    width: 100%;
    border-radius: 1rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const PreviewCardSubHeading = styled.h4`
  color: var(--dark-grayish-blue);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1rem;
`;

export const PreviewCardHeading = styled.h1`
  color: var(--very-dark-blue);
  font-family: var(--fraunces-font-family);
  font-size: 2.9rem;
  margin-bottom: 1rem;
`;

export const PreviewCardContent = styled.p`
  margin-bottom: 1rem;
  color: var(--dark-grayish-blue);
  line-height: 1.5;
  font-size: 1.0003rem;
`;

export const PreviewCardPrice = styled.span`
  color: var(--dark-cyan);
  font-size: 2rem;
  font-family: var(--fraunces-font-family);
`;

export const PreviewCardOldPrice = styled.span`
  font-size: 1rem;
  color: var(--dark-grayish-blue);
  text-decoration: line-through;
`;

export const PreviewCardPrices = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;
