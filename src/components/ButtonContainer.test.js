import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";
import WishesContextProvider from "../context/WishesContext";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("ButtonContainer", () => {
  afterEach(cleanup);

  it("renders the page, including child components", () => {
    const component = render(
      <ThemeProvider>
        <ButtonContainer />
      </ThemeProvider>
    );
    const nextButton = component.getByText("Next");
    expect(nextButton).toBeVisible();
  });

  // Skipping because of the TypeError with canvas-confetti
  xit("shows both Next and Previous buttons after click", () => {
    const component = render(
      <WishesContextProvider>
        <ThemeProvider>
          <ButtonContainer />
        </ThemeProvider>
      </WishesContextProvider>
    );
    const nextButton = component.getByText("Next");
    fireEvent.click(nextButton);

    const visibleButtons = component.getAllByTestId("styled-button");
    expect(visibleButtons.length).toEqual(2);
  });
});
