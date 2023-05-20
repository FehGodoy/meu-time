import React from "react";
import { render, screen } from "@testing-library/react";
import BoxLogin from "@/components/BoxLogin";
import FormContext from "@/context/FormContext";

describe("Modal Login Component", () => {
  test("Testing whether modal headings appear", () => {
    render(
      <FormContext.Provider
        value={{
          modalLogin: true,
        }}
      >
        <BoxLogin />
      </FormContext.Provider>
    );

    const heading1 = screen.getByTestId("heading1");
    const heading6 = screen.getByTestId("heading6");

    expect(heading1).toBeInTheDocument();
    expect(heading6).toBeInTheDocument();
  });
  test("Testing whether it renders an input and a button", () => {
    render(
      <FormContext.Provider value={{ modalLogin: true }}>
        <BoxLogin />
      </FormContext.Provider>
    );

    const input = screen.getByPlaceholderText("Sua chave vai aqui...");
    const submitButton = screen.getByRole("button", { name: "Login" });

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
