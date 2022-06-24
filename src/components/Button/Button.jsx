import React from "react";
import { ButtonElement, ButtonTitle } from "./Button.styles";

function Button({ title, type, Icon }) {
  return (
    <ButtonElement type={type}>
      <Icon />
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonElement>
  );
}

export default Button;
