import React from "react";
import { Box } from "@chakra-ui/core";
import MessageContainer from "./components/MessageContainer";
import VideoContainer from "./components/VideoContainer";
import Nav from "./components/Nav";
import { Router } from "@reach/router";

const App = () => (
  <Box className="App">
    <Nav />

    <Router>
      <MessageContainer path="/" />
      <VideoContainer path="/video" />
    </Router>
  </Box>
);

export default App;
