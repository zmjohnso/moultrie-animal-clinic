import { render, screen } from "@testing-library/react";
import { ContactPageComponent } from "@/components/contact-page";
import "@testing-library/jest-dom";

describe("ContactPageComponent", () => {
  beforeEach(() => {
    render(<ContactPageComponent />);
  });

  it("renders the Contact Us heading", () => {
    const heading = screen.getByRole("heading", { name: "Contact Us" });
    expect(heading).toBeInTheDocument();
  });

  it("displays correct contact information", () => {
    expect(screen.getByText("+1 (904) 797-5601")).toBeInTheDocument();
    expect(
      screen.getByText("moultrieanimalclinic@gmail.com")
    ).toBeInTheDocument();
    expect(screen.getByText("+1 (904) 794-7170")).toBeInTheDocument();
    expect(
      screen.getByText("3450 US Hwy 1 S, Saint Augustine, FL 32086")
    ).toBeInTheDocument();
  });

  it("contains correct links with proper attributes", () => {
    const phoneLink = screen.getByRole("link", { name: "+1 (904) 797-5601" });
    expect(phoneLink).toHaveAttribute("href", "tel:+19047975601");

    const emailLink = screen.getByRole("link", {
      name: "moultrieanimalclinic@gmail.com",
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:moultrieanimalclinic@gmail.com"
    );

    const faxLink = screen.getByRole("link", { name: "+1 (904) 794-7170" });
    expect(faxLink).toHaveAttribute("href", "tel:+19047947170");

    const addressLink = screen.getByRole("link", {
      name: "3450 US Hwy 1 S, Saint Augustine, FL 32086",
    });
    expect(addressLink).toHaveAttribute(
      "href",
      "https://www.google.com/maps/search/?api=1&query=3450+US+Hwy+1+S,+Saint+Augustine,+FL+32086"
    );
    expect(addressLink).toHaveAttribute("target", "_blank");
    expect(addressLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("displays Hours of Operation", () => {
    const hoursHeading = screen.getByRole("heading", {
      name: "Hours of Operation",
    });
    expect(hoursHeading).toBeInTheDocument();
  });

  it("renders Google Map", () => {
    const map = screen.getByTitle("Google Map of Moultrie Animal Clinic");
    expect(map).toBeInTheDocument();
  });

  it("renders social media links", () => {
    const facebookLink = screen.getByRole("link", {
      name: "Visit the Moultrie Animal Clinic Facebook.",
    });
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/Moultrieanimalclinic"
    );
    expect(facebookLink).toHaveAttribute("target", "_blank");
    expect(facebookLink).toHaveAttribute("rel", "noopener noreferrer");

    const googleLink = screen.getByRole("link", {
      name: "Visit the Moultrie Animial Clinic Google search entry.",
    });
    expect(googleLink).toHaveAttribute(
      "href",
      "https://www.google.com/search?q=Moultrie+Animal+Clinic"
    );
    expect(googleLink).toHaveAttribute("target", "_blank");
    expect(googleLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
