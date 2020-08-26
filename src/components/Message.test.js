import React from "react";
import { render } from "@testing-library/react";
import Message from "./Message";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Message", () => {
  it("renders the component", () => {
    const component = render(
      <ThemeProvider>
        <Message />
      </ThemeProvider>
    );
    const emailEmojiForMessage = component.getByRole("img");
    expect(emailEmojiForMessage).toBeVisible();
  });
});
