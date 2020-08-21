import React from "react";
import { Button as BaseButton } from "@chakra-ui/core";

type ButtonProps = {
  children: string;
  onClick: () => void;
  element?: "a";
  marginLeft?: number;
  marginRight?: number;
  variant?: "outline";
};

const Button = (props: ButtonProps) => {
  const {
    element,
    variant,
    marginLeft,
    marginRight,
    onClick,
    children
  } = props;

  return (
    <BaseButton
      as={element}
      variantColor="red"
      variant={variant}
      mr={marginRight}
      ml={marginLeft}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
