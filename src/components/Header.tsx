import React from "react";
import { Heading } from "@chakra-ui/core";

type HeaderProps = {
  children: string;
};

const Header = (props: HeaderProps) => (
  <header>
    <Heading as="h1" size="xl" textAlign="center" mt={12} mb={12}>
      {props.children} <br />
      <span role="img" aria-label="Celebration emojis">
        🌎 🎈 🍰 ❤️ 🍾 🌍
      </span>
    </Heading>
  </header>
);

export default Header;
