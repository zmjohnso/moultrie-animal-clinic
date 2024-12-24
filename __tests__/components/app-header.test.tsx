import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AppHeaderComponent } from "@/components/app-header";

describe("AppHeaderComponent", () => {
  it("renders the App Header Component and associated content", () => {
    render(<AppHeaderComponent />);

    const moultrieLogo = screen.getByRole("img", {
      name: "Moultrie Animal Clinic Logo",
    });

    const homeLink = screen.getByRole("link", {
      name: "Home",
    });
    const meetOurTeamLink = screen.getByRole("link", {
      name: "Meet Our Team",
    });
    const ourServicesLink = screen.getByRole("link", {
      name: "Our Services",
    });
    const takeATourLink = screen.getByRole("link", {
      name: "Take a Tour",
    });
    const newClientsLink = screen.getByRole("link", {
      name: "New Clients",
    });
    const onlinePharmacyLink = screen.getByRole("link", {
      name: "Online Pharmacy",
    });

    const facebookLogo = screen.getByRole("img", {
      name: "Facebook Icon",
    });
    const phoneIcon = screen.getByRole("link", {
      name: "Contact Us",
    });
    const phoneNumber = screen.getByRole("link", {
      name: "+1 (904) 797-5601",
    });

    expect(moultrieLogo).toBeInTheDocument();

    expect(homeLink).toBeInTheDocument();
    expect(meetOurTeamLink).toBeInTheDocument();
    expect(ourServicesLink).toBeInTheDocument();
    expect(takeATourLink).toBeInTheDocument();
    expect(newClientsLink).toBeInTheDocument();
    expect(onlinePharmacyLink).toBeInTheDocument();

    expect(facebookLogo).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
  });
});
