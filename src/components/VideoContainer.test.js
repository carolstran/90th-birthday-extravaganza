import React from "react";
import { cleanup, render } from "@testing-library/react";
import VideoContainer from "./VideoContainer";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("VideoContainer", () => {
  it("renders the container, including the video element", () => {
    const component = render(
      <ThemeProvider>
        <VideoContainer />
      </ThemeProvider>
    );
    const zoomRecording = component.getByTitle(
      "Recording from the family Zoom chat"
    );
    expect(zoomRecording).toBeVisible();
  });
});
