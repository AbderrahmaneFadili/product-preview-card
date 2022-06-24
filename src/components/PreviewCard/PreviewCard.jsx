import React from "react";
import {
  PreviewCardWrapper,
  PreviewCardHeading,
  PreviewCardSubHeading,
  PreviewCardColOne,
  PreviewCardColTwo,
  PreviewCardContent,
  PreviewCardImage,
  PreviewCardOldPrice,
  PreviewCardPrice,
  PreviewCardPrices,
  AddToCartButtonContainer,
} from "./PreviewCard.styles";
import Button from "../Button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

const PreviewCard = ({
  image,
  catgeory,
  title,
  description,
  price,
  oldPrice,
}) => {
  return (
    <PreviewCardWrapper>
      {/* Col One */}
      <PreviewCardColOne>
        {/* Image */}
        <PreviewCardImage
          src={image}
          alt="Product image"
          title="Product image"
        />
      </PreviewCardColOne>
      {/* Col Two */}
      <PreviewCardColTwo>
        {/* Sub Heading */}
        <PreviewCardSubHeading>{catgeory}</PreviewCardSubHeading>
        {/* Heading */}
        <PreviewCardHeading>{title}</PreviewCardHeading>
        {/* Content */}
        <PreviewCardContent>{description}</PreviewCardContent>
        {/* Prices */}
        <PreviewCardPrices>
          <PreviewCardPrice>{price}</PreviewCardPrice>
          <PreviewCardOldPrice>{oldPrice}</PreviewCardOldPrice>
        </PreviewCardPrices>
        {/* Add to Cart Button */}
        <AddToCartButtonContainer>
          <Button
            title={"Add to Cart"}
            type="button"
            Icon={() => <AiOutlineShoppingCart size={20} />}
          />
        </AddToCartButtonContainer>
      </PreviewCardColTwo>
    </PreviewCardWrapper>
  );
};

export default PreviewCard;
