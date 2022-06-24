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
} from "./PreviewCard.styles";

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
      </PreviewCardColTwo>
    </PreviewCardWrapper>
  );
};

export default PreviewCard;
