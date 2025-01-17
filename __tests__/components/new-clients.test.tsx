import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NewClientsComponent } from "@/components/new-clients";

describe("NewClientsComponent", () => {
  it("renders the component with correct content", () => {
    render(<NewClientsComponent />);

    expect(
      screen.getByAltText(
        "Dog laying down in the grass with surrounding flowers."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Saint Augustine Veterinary Services - Delivered With Courtesy And Respect!"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(
        "Dog laying down in the grass with surrounding flowers."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "New Client Registration Form" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "What Our Clients Say" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "See more reviews on Google" })
    ).toBeInTheDocument();
  });
});
