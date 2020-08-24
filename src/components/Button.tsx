import React from "react";
import { Button as BaseButton } from "@chakra-ui/core";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  element?: "a" | "button";
  marginLeft?: number;
  marginRight?: number;
  variant?: "outline";
};

const Button = ({
  element = "a",
  variant,
  marginLeft,
  marginRight,
  onClick,
  children
}: ButtonProps) => (
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

export default Button;
