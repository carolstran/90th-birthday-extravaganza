import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders a Button with passed props", () => {
    const component = render(
      <ThemeProvider>
        <Button
          children="Next"
          ariaLabel="Example of a next button"
          action={() => {}}
        />
      </ThemeProvider>
    );
    const exampleButton = component.getByLabelText("Example of a next button");
    expect(exampleButton).toBeVisible();
  });

  it("calls the passed function when clicked", () => {
    const fn = jest.fn();

    const component = render(
      <ThemeProvider>
        <Button ariaLabel="Example of a next button" action={fn}>
          Next
        </Button>
      </ThemeProvider>
    );

    const exampleButton = component.getByLabelText("Example of a next button");
    fireEvent.click(exampleButton);

    expect(fn).toHaveBeenCalled();
  });
});
