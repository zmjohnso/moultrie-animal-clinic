import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MeetOurTeamComponent } from "@/components/meet-our-team";

// Mock the API functions
jest.mock("@/lib/api", () => ({
  getJobTypes: jest
    .fn()
    .mockResolvedValue([
      { title: "Veterinarian" },
      { title: "Office Manager" },
    ]),
  getMeetOurTeamPageData: jest.fn().mockResolvedValue({
    heading: "Meet Our Team",
    teamMembersCollection: {
      items: [
        {
          name: "Dr. John Doe",
          role: "Veterinarian",
          description: "Experienced veterinarian with 10 years of practice.",
          profilePhoto: {
            url: "/placeholder-user.jpg",
            description: "Dr. John Doe",
          },
          jobTitle: { title: "Veterinarian" },
        },
        {
          name: "Jane Smith",
          role: "Office Manager",
          description: "Skilled manager with a passion for animal care.",
          profilePhoto: {
            url: "/placeholder-user.jpg",
            description: "Jane Smith",
          },
          jobTitle: { title: "Office Manager" },
        },
      ],
    },
  }),
}));

describe("MeetOurTeamComponent", () => {
  beforeEach(async () => {
    const MeetOurTeamComponentWrapper = await MeetOurTeamComponent();
    render(MeetOurTeamComponentWrapper);
  });

  it("renders the Meet Our Team heading", () => {
    const heading = screen.getByRole("heading", { name: "Meet Our Team" });
    expect(heading).toBeInTheDocument();
  });

  it("displays correct number of team member cards", () => {
    const teamMemberCards = screen.getAllByTestId("team-member-card");
    expect(teamMemberCards).toHaveLength(2);
  });

  it("renders correct team member information", () => {
    expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
    const veterinarianTexts = screen.getAllByText("Veterinarian");
    expect(veterinarianTexts).toHaveLength(2); // One for section title, one for role
    expect(veterinarianTexts[1]).toBeInTheDocument(); // Check the role text
    expect(
      screen.getByText("Experienced veterinarian with 10 years of practice.")
    ).toBeInTheDocument();

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    const officeManagerTexts = screen.getAllByText("Office Manager");
    expect(officeManagerTexts).toHaveLength(2);
    expect(veterinarianTexts[1]).toBeInTheDocument();
    expect(
      screen.getByText("Skilled manager with a passion for animal care.")
    ).toBeInTheDocument();
  });

  it("displays correct job type sections", () => {
    expect(
      screen.getByRole("heading", { name: "Veterinarian" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Office Manager" })
    ).toBeInTheDocument();
  });

  it("renders profile photos with correct alt text", () => {
    const photos = screen.getAllByRole("img");
    expect(photos).toHaveLength(10); // 8 grid photos + 2 team member photos
    expect(photos[8]).toHaveAttribute("alt", "Dr. John Doe");
    expect(photos[9]).toHaveAttribute("alt", "Jane Smith");
  });

  it("renders the correct number of grid photos", () => {
    const gridPhotos = screen.getAllByAltText(/Dog|Cat/i);
    expect(gridPhotos).toHaveLength(8);
  });

  it("applies correct CSS classes to grid photos", () => {
    const gridPhotos = screen.getAllByAltText(/Dog|Cat/i);
    gridPhotos.forEach((photo, index) => {
      expect(photo).toHaveClass("object-cover");
      if (index >= 4) {
        expect(photo.parentElement).toHaveClass("hidden", "md:block");
      }
    });
  });
});
