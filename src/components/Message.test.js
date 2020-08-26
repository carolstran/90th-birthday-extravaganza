import React from "react";
import { render } from "@testing-library/react";
import Message from "./Message";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

it("renders initial Message", () => {
  const component = render(
    <ThemeProvider>
      <Message />
    </ThemeProvider>
  );
  const test = component.getByText("Email Don:")
  expect(test).toBeVisible();
});
