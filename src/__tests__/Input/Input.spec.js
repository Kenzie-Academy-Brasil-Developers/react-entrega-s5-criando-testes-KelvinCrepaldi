import { render, screen } from "@testing-library/react";

import { Input } from "semantic-ui-react";

describe("Input Component", () => {
  test("Render input", () => {
    render(
      <>
        <Input
          error={false}
          type="number"
          placeholder="test1"
          onChange={() => {}}
        />
      </>
    );

    expect(screen.getAllByPlaceholderText("test1")).toBeTruthy();
  });
  test("Render an error", () => {
    render(
      <>
        <Input
          error={false}
          type="number"
          placeholder="test2"
          onChange={() => {}}
        />
      </>
    );

    expect(screen.getByPlaceholderText("test2")).toBeInTheDocument();
  });
});
