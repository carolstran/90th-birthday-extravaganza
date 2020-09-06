import React from "react";
import { Box } from "@chakra-ui/core";
import Messages from "./pages/Messages";
import ZoomRecording from "./pages/ZoomRecording";
import Videos from "./pages/Videos";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";

const App = () => (
  <Box className="App">
    <Navigation />

    <Router>
      <Messages path="/" />
      <ZoomRecording path="/zoom" />
      <Videos path="/videos" />
    </Router>
  </Box>
);

export default App;
