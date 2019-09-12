import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as React from "react";

import CharacterSearch from "./index";

const handleSearchTermChange = jest.fn(() => {});

describe("Meter Reading Table", () => {
  it("should render a form with a text input", () => {
    const { getByPlaceholderText, container } = render(
      <CharacterSearch handleSearchTermChange={handleSearchTermChange} />
    );
    const textInput = getByPlaceholderText("e.g. Luke Skywalker");

    expect(container).toContainHTML("form");
    expect(textInput).toContainHTML("input");
  });

  it("should call handleSearchTermChange when the value in the input is changed by the user", () => {
    const { getByPlaceholderText } = render(
      <CharacterSearch handleSearchTermChange={handleSearchTermChange} />
    );
    const textInput = getByPlaceholderText("e.g. Luke Skywalker");

    fireEvent.change(textInput, { target: { value: "Luke" } });
    expect(handleSearchTermChange).toHaveBeenCalledTimes(1);
  });
});
