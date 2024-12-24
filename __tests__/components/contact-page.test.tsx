import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactPageComponent } from "@/components/contact-page";

describe("ContactPageComponent", () => {
  it("renders the Contact Page Component and associated content", () => {
    render(<ContactPageComponent />);

    const contactUsHeading = screen.getByRole("heading", {
      name: "Contact Us",
    });
    const phoneNumber = screen.getByRole("link", {
      name: "+1 (904) 797-5601",
    });
    const email = screen.getByRole("link", {
      name: "moultrieanimalclinic@gmail.com",
    });
    const faxNumber = screen.getByRole("link", {
      name: "+1 (904) 794-7170",
    });
    const address = screen.getByRole("link", {
      name: "3450 US Hwy 1 S, Saint Augustine, FL 32086",
    });
    const hoursOfOperatian = screen.getByRole("heading", {
      name: "Hours of Operation",
    });
    const googleMap = screen.getByTitle("Google Map of Moultrie Animal Clinic");
    const facebookLink = screen.getByRole("link", {
      name: "Facebook Icon",
    });
    const googleLink = screen.getByRole("link", {
      name: "Google Icon",
    });

    expect(contactUsHeading).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(faxNumber).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(hoursOfOperatian).toBeInTheDocument();
    expect(googleMap).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(googleLink).toBeInTheDocument();
  });
});
