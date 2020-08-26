import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders without crashing", () => {
    const component = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const appHeader = component.getByText(
      "Birthday Wishes From Around the Globe"
    );
    expect(appHeader).toBeVisible();
  });
});
