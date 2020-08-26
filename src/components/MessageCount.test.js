import React from "react";
import { render } from "@testing-library/react";
import MessageCount from "./MessageCount";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("MessageCount", () => {
  it("renders the component with first message", () => {
    const component = render(
      <ThemeProvider>
        <MessageCount />
      </ThemeProvider>
    );
    const messageStatus = component.getByRole("status");
    expect(messageStatus).toBeVisible();
    expect(messageStatus.textContent).toMatch("Message 1");
  });
});
