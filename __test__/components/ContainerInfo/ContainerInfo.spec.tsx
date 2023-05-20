import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider } from "@/context/FormContext";
import ContainerInfo from "@/components/ContainerInfo";

test("show 1 heading", async () => {
  render(
    <FormProvider>
      <ContainerInfo />
    </FormProvider>
  );

  const headings = await screen.findAllByRole("heading");
  expect(headings).toHaveLength(1);
});
