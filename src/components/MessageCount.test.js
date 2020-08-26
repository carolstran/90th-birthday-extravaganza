import React from "react";
import { render } from "@testing-library/react";
import MessageCount from "./MessageCount";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

it("renders initial MessageCount", () => {
  const component = render(
    <ThemeProvider>
      <MessageCount />
    </ThemeProvider>
  );
  const test = component.getByRole("status")
  expect(test).toBeVisible();
});
