import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Messages from "./Messages";
import WishesContextProvider from "../context/WishesContext";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("Messages", () => {
  afterEach(cleanup);

  it("renders the page, including child pages", () => {
    const page = render(
      <ThemeProvider>
        <Messages />
      </ThemeProvider>
    );
    const messagesHeading = page.getByText(
      "Birthday Wishes From Around the Globe"
    );
    expect(messagesHeading).toBeVisible();
  });

  // Skipping because of the TypeError with canvas-confetti
  xit("shows next message after button click", () => {
    const page = render(
      <WishesContextProvider>
        <ThemeProvider>
          <Messages />
        </ThemeProvider>
      </WishesContextProvider>
    );
    const nextButton = page.getByText("Next");
    fireEvent.click(nextButton);

    const messageStatus = page.getByRole("status");
    expect(messageStatus.textContent).toMatch("Message 2");
  });
});
