import React from "react";
import { Box } from "@chakra-ui/core";
import Messages from "./pages/Messages";
import ZoomRecording from "./pages/ZoomRecording";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";

const App = () => (
  <Box className="App">
    <Navigation />

    <Router>
      <Messages path="/" />
      <ZoomRecording path="/zoom" />
    </Router>
  </Box>
);

export default App;
