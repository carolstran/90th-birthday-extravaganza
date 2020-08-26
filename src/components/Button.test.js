import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

it("renders a Button with passed props", () => {
  const component = render(
    <ThemeProvider>
      <Button children="Next" ariaLabel="Example of a next button" action={() => {}}  />
    </ThemeProvider>
  );
  const test = component.getByLabelText("Example of a next button")
  expect(test).toBeVisible();
});
