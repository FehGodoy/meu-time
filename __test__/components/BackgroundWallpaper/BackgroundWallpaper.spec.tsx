import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormProvider } from "@/context/FormContext";
import BackgroundWallpaper from "@/components/BackgroundWallpaper";

describe("Background Component", () => {
  test("show 3 headings", async () => {
    render(
      <FormProvider>
        <BackgroundWallpaper />
      </FormProvider>
    );

    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(3);
  });
  test("Testing whether the button's text is rendered", () => {
    render(
      <FormProvider>
        <BackgroundWallpaper />
      </FormProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
