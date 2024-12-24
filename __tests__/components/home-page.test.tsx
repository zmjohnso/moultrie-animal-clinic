import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomePageComponent } from "@/components/home-page";

describe("HomePageComponent", () => {
  it("renders the Contact Page Component and associated content", () => {
    render(<HomePageComponent />);

    const moultrieLogo = screen.getByRole("img", {
      name: "Moultrie Animal Clinic Logo",
    });
    const homeLogoText = screen.getByText(
      "Family Owned and Providing Compassionate Care for Your Furry Family Members Since 1985!"
    );
    const meetOurTeamHeading = screen.getByRole("heading", {
      name: "Your Trusted Local Veterinarians",
    });
    const meetOurTeamText = screen.getByText(
      "At Moultrie Animal Clinic, we understand that your pets are more than just animals - they're family. Our team of experienced veterinarians and staff are dedicated to providing the highest quality care for your beloved companions. We strive to provide a personal touch that only a locally owned and family run practice can proudly offer."
    );
    const meetOurTeamButton = screen.getByRole("link", {
      name: "Meet Our Team",
    });
    const meetOurTeamPhoto = screen.getByRole("img", {
      name: "Moultrie Animal Clinic Team",
    });
    const ourServicesButton = screen.getByRole("link", {
      name: "View All Services",
    });
    const clientInformationButton = screen.getByRole("link", {
      name: "New Client Information",
    });
    const takeATourButton = screen.getByRole("link", {
      name: "Take a Tour",
    });

    expect(moultrieLogo).toBeInTheDocument();
    expect(homeLogoText).toBeInTheDocument();
    expect(meetOurTeamHeading).toBeInTheDocument();
    expect(meetOurTeamText).toBeInTheDocument();
    expect(meetOurTeamButton).toBeInTheDocument();
    expect(meetOurTeamPhoto).toBeInTheDocument();
    expect(ourServicesButton).toBeInTheDocument();
    expect(clientInformationButton).toBeInTheDocument();
    expect(takeATourButton).toBeInTheDocument();
  });
});
