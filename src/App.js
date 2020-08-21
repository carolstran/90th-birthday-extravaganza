import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import MessageContainer from "./components/MessageContainer";

const App = () => (
  <Box className="App">
    <Box as="header">
      <Heading as="h1" size="xl" textAlign="center" mt={12} mb={12}>
        Birthday Wishes From Around the Globe <br />
        <span role="img" aria-label="Celebration emojis">
          🌎 🎈 🍰 ❤️ 🍾 🌍
        </span>
      </Heading>
    </Box>
    <MessageContainer />
  </Box>
);

export default App;
