import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the component with correct heading text and emojis", () => {
    const component = render(
      <ThemeProvider>
        <Header>Example heading</Header>
      </ThemeProvider>
    );
    const headingText = component.getByText("Example heading");
    expect(headingText).toBeVisible();

    const emojisInHeader = component.getByLabelText("Celebration emojis");
    expect(emojisInHeader).toBeVisible();
  });
});
