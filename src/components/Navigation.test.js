import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Navigation", () => {
  it("renders the navigation with two links", () => {
    const component = render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
    const navLinks = component.getAllByTestId("navigation-link");
    expect(navLinks.length).toEqual(3);
  });
});
