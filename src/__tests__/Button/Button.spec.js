import { render, screen } from "@testing-library/react";
import Search from "../../components/Search/index";

describe("Button Component", () => {
  const obj = { name: /Buscar pelo CEP/i };
  test("render button", () => {
    render(
      <>
        <Search />
      </>
    );

    const children = screen.getByRole("button", obj);
    expect(children).toBeTruthy();
  });
});
