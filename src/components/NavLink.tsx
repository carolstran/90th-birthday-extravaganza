import React from "react";
import { Link as ReachLink } from "@reach/router";
import { Button } from "@chakra-ui/core";

type NavLinkProps = {
  children: string;
  path: string;
};

const NavLink = (props: NavLinkProps) => {
  const { children, path } = props;

  return (
    <Button
      as={ReachLink}
      // @ts-ignore
      to={path}
      color="red.800"
      variant="link"
      fontWeight={600}
      data-testid="navigation-link"
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default NavLink;
