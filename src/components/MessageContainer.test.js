import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import MessageContainer from "./MessageContainer";
import WishesContextProvider from "../context/WishesContext";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("MessageContainer", () => {
  afterEach(cleanup);

  it("renders the container, including child components", () => {
    const component = render(
      <ThemeProvider>
        <MessageContainer />
      </ThemeProvider>
    );
    const emojiWithinContainer = component.getByRole("img");
    expect(emojiWithinContainer).toBeVisible();
  });

  // Skipping because of the TypeError with canvas-confetti
  xit("shows next message after button click", () => {
    const component = render(
      <WishesContextProvider>
        <ThemeProvider>
          <MessageContainer />
        </ThemeProvider>
      </WishesContextProvider>
    );
    const nextButton = component.getByText("Next");
    fireEvent.click(nextButton);

    const messageStatus = component.getByRole("status");
    expect(messageStatus.textContent).toMatch("Message 2");
  });
});
