import React from "react";
import { Flex, Link } from "@chakra-ui/core";
import { Link as ReachLink } from "@reach/router";

const Nav = () => (
  <Flex justifyContent="center" mt={12}>
    <Link color="red.800" mr={4}>
      <ReachLink to="/">
        <b>{"Read Messages".toUpperCase()}</b>
      </ReachLink>
    </Link>
    <Link color="red.800" ml={4}>
      <ReachLink to="/video">
        <b>{"Watch Zoom Recording".toUpperCase()}</b>
      </ReachLink>
    </Link>
  </Flex>
);

export default Nav;
