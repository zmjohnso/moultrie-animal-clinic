import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomePageComponent } from "@/components/home-page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("HomePageComponent", () => {
  beforeEach(() => {
    render(<HomePageComponent />);
  });

  it("renders the Moultrie Animal Clinic logo and tagline", () => {
    const logo = screen.getByAltText(
      "Moultrie Animal Clinic logo with lighthouse and clinic name."
    );
    const tagline = screen.getByText(
      "Family Owned - Providing Compassionate Care for Your Furry Family Members Since 1985"
    );

    expect(logo).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
  });

  it("renders the 'Meet Our Team' section", () => {
    const heading = screen.getByRole("heading", {
      name: "Your Trusted Local Veterinarians",
    });
    const description = screen.getByText(
      /At Moultrie Animal Clinic, we understand that your pets are more than just animals/
    );
    const meetOurTeamButton = screen.getByRole("link", {
      name: "Meet Our Team",
    });
    const teamPhoto = screen.getByAltText("Dog licking a cat.");

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(meetOurTeamButton).toBeInTheDocument();
    expect(teamPhoto).toBeInTheDocument();
  });

  it("renders the 'Our Services' section", () => {
    const servicesHeading = screen.getByRole("heading", {
      name: "Our Services",
    });
    const serviceCards = screen
      .getAllByRole("heading", { level: 3 })
      .filter((heading) =>
        heading.closest("section")?.textContent?.includes("Our Services")
      );
    const viewAllServicesButton = screen.getByRole("link", {
      name: "View All Services",
    });
    const newClientInfoButton = screen.getByRole("link", {
      name: "New Client Information",
    });

    expect(servicesHeading).toBeInTheDocument();
    expect(serviceCards).toHaveLength(4);
    expect(viewAllServicesButton).toBeInTheDocument();
    expect(newClientInfoButton).toBeInTheDocument();
  });

  it("renders the 'Contact Us' section", () => {
    const contactHeading = screen.getByRole("heading", { name: "Contact Us" });
    const phoneLink = screen.getByRole("link", { name: "+1 (904) 797-5601" });
    const emailLink = screen.getByRole("link", {
      name: "moultrieanimalclinic@gmail.com",
    });
    const addressLink = screen.getByRole("link", {
      name: "3450 US Hwy 1 S, Saint Augustine, FL 32086",
    });
    const hoursOfOperation = screen.getByText("Hours of Operation");
    const googleReviewsLink = screen.getByRole("link", {
      name: "Read our Google Reviews",
    });
    const tourButton = screen.getByRole("link", { name: "Take a Tour" });

    expect(contactHeading).toBeInTheDocument();
    expect(phoneLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
    expect(addressLink).toBeInTheDocument();
    expect(hoursOfOperation).toBeInTheDocument();
    expect(googleReviewsLink).toBeInTheDocument();
    expect(tourButton).toBeInTheDocument();
  });

  it("renders the Google Map component", () => {
    const map = screen.getByTitle("Google Map of Moultrie Animal Clinic");
    expect(map).toBeInTheDocument();
  });
});
