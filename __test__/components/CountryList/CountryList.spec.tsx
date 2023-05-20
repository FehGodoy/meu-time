import React from "react";
import { render, screen } from "@testing-library/react";
import CountryList from "@/components/CountryList";
import FormContext from "@/context/FormContext";

describe("Country List Component", () => {
  test("renders h1 when successFetchLogin is true", () => {
    render(
      <FormContext.Provider
        value={{
          successFetchLogin: true,
          countrySelect: "England",
          fetchLeague: jest.fn(),
        }}
      >
        <CountryList />
      </FormContext.Provider>
    );

    const heading1 = screen.queryByRole("heading", { level: 1 });

    expect(heading1).toBeInTheDocument();
  });
});
