import React from "react";
import { Flex } from "@chakra-ui/core";
import NavLink from "./NavLink";

const Navigation = () => (
  <Flex
    as="nav"
    wrap="wrap"
    align="center"
    justify="space-evenly"
    direction={["column", "row", "row"]}
    p={4}
    bg="gray.50"
  >
    <NavLink path="/">Read Messages</NavLink>
    <NavLink path="/videos">Watch Family Videos</NavLink>
    <NavLink path="/zoom">Watch Zoom Recording</NavLink>
  </Flex>
);

export default Navigation;
