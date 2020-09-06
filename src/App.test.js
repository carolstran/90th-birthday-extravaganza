import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";
import "@testing-library/jest-dom";

describe("App", () => {
  afterEach(cleanup);

  function renderWithRouter(
    ui,
    { route = "/", history = createHistory(createMemorySource(route)) } = {}
  ) {
    return {
      ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
      history
    };
  }

  it("renders index route without crashing", () => {
    const component = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const indexHeading = component.getByText(
      "Birthday Wishes From Around the Globe"
    );
    expect(indexHeading).toBeVisible();
  });

  it("navigates to the correct routes", async () => {
    const {
      container,
      history: { navigate }
    } = renderWithRouter(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    expect(container.innerHTML).toMatch(
      "Birthday Wishes From Around the Globe"
    );

    await navigate("/zoom");
    expect(container.innerHTML).toMatch(`Zoom Recording From The "Party"`);
  });
});
