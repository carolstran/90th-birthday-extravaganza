import React from "react";
import { Box } from "@chakra-ui/core";
import MessageContainer from "./components/MessageContainer";
import VideoContainer from "./components/VideoContainer";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";

const App = () => (
  <Box className="App">
    <Navigation />

    <Router>
      <MessageContainer path="/" />
      <VideoContainer path="/video" />
    </Router>
  </Box>
);

export default App;
