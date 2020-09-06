import React from "react";
import { Button as BaseButton } from "@chakra-ui/core";

type ButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  action: () => void;
  element?: "a" | "button";
  marginLeft?: number;
  marginRight?: number;
  variant?: "outline";
};

const Button = ({
  element = "a",
  ariaLabel,
  variant,
  marginLeft,
  marginRight,
  action,
  children
}: ButtonProps) => (
  <BaseButton
    as={element}
    aria-label={ariaLabel}
    variantColor="red"
    variant={variant}
    mr={marginRight}
    ml={marginLeft}
    onClick={action}
    onKeyPress={action}
    tabIndex={0}
    data-testid="styled-button"
  >
    {children}
  </BaseButton>
);

export default Button;
