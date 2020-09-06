import React from "react";
import { render } from "@testing-library/react";
import Videos from "./Videos";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Videos", () => {
  it("renders the page with videos", () => {
    const page = render(
      <ThemeProvider>
        <Videos />
      </ThemeProvider>
    );
    const cakeVideo = page.getByTitle("Birthday cake with the Arrayan's");
    expect(cakeVideo).toBeVisible();
  });

  it("renders the correct number of videos", () => {
    const page = render(
      <ThemeProvider>
        <Videos />
      </ThemeProvider>
    );
    const videos = page.getAllByTestId("video-container");
    expect(videos.length).toEqual(2);
  });
});
