import React from "react";
import { render } from "@testing-library/react";
import MessageContainer from "./MessageContainer";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

it("renders the MessageContainer", () => {
  const component = render(
    <ThemeProvider>
      <MessageContainer />
    </ThemeProvider>
  );
  const test = component.getByRole("img")
  expect(test).toBeVisible();
});
