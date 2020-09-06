import React from "react";
import { render } from "@testing-library/react";
import Video from "./Video";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Video", () => {
  it("renders the component", () => {
    const component = render(
      <ThemeProvider>
        <Video
          embedLink="https://www.youtube.com/embed/uZUxBPzCZko"
          title="Panda birthday party"
        />
      </ThemeProvider>
    );
    const exampleVideo = component.getByTitle("Panda birthday party");
    expect(exampleVideo).toBeVisible();
  });
});
