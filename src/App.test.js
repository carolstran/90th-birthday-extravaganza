import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const component = render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const test = component.getByText("Birthday Wishes From Around the Globe")
  expect(test).toBeVisible();
});
