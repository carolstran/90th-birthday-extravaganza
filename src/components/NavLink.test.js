import React from "react";
import { render } from "@testing-library/react";
import NavLink from "./NavLink";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("NavLink", () => {
  it("renders the link with uppercase letters", () => {
    const component = render(
      <ThemeProvider>
        <NavLink path="/video">Example video link</NavLink>
      </ThemeProvider>
    );
    const formattedVideoLinkText = component.getByText("EXAMPLE VIDEO LINK");
    expect(formattedVideoLinkText).toBeVisible();
  });
});
