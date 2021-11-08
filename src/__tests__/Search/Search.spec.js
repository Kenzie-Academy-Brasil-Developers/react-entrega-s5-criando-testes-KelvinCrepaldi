import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";

import Search from "../../components/Search";
import Providers from "../../providers";
import api from "../../services";

const apiMock = new MockAdapter(api);

describe("Test Search", () => {
  it("should be able to find cep code", async () => {
    const obj = {
      target: {
        value: 81050450,
      },
    };

    apiMock.onPost("/cep").replyOnce(200, {});

    render(
      <>
        <Providers>
          <Search />
        </Providers>
      </>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(cepField, obj);
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(cepField).toHaveValue(81050450);
    });
  });
});
