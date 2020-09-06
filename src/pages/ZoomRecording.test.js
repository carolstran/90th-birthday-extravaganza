import React from "react";
import { cleanup, render } from "@testing-library/react";
import ZoomRecording from "./ZoomRecording";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("ZoomRecording", () => {
  it("renders the page, including the video element", () => {
    const page = render(
      <ThemeProvider>
        <ZoomRecording />
      </ThemeProvider>
    );
    const zoomRecording = page.getByTitle(
      "Recording from the family Zoom chat"
    );
    expect(zoomRecording).toBeVisible();
  });
});
