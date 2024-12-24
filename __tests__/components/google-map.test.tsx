import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GoogleMapComponent } from "@/components/google-map";
import * as nextNavigation from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("GoogleMapComponent", () => {
  it("renders the Google Map Component", () => {
    render(<GoogleMapComponent />);

    const googleMap = screen.getByTitle("Google Map of Moultrie Animal Clinic");

    expect(googleMap).toHaveAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5511120403247!2d-81.31808368489!3d29.846099981951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d9f0b1d7e5e7%3A0x1b5c5b1d1b1b1b1b!2s3450%20US-1%2C%20St%20Augustine%2C%20FL%2032086!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
    );
    expect(googleMap).toBeInTheDocument();
  });

  it("applies correct styles for contact page", () => {
    jest.spyOn(nextNavigation, "usePathname").mockReturnValue("/contact");

    const { container } = render(<GoogleMapComponent />);

    const mapContainer = container.firstChild;
    expect(mapContainer).toHaveClass("mt-2 h-64 md:h-80 lg:h-96");
    expect(mapContainer).not.toHaveClass("h-full min-h-[300px]");
  });

  it("applies correct styles for home page", () => {
    jest.spyOn(nextNavigation, "usePathname").mockReturnValue("/");

    const { container } = render(<GoogleMapComponent />);

    const mapContainer = container.firstChild;
    expect(mapContainer).toHaveClass("h-full min-h-[300px]");
    expect(mapContainer).not.toHaveClass("mt-2 h-64 md:h-80 lg:h-96");
  });

  it("applies default styles for other pages", () => {
    jest.spyOn(nextNavigation, "usePathname").mockReturnValue("/other");

    const { container } = render(<GoogleMapComponent />);

    const mapContainer = container.firstChild;
    expect(mapContainer).not.toHaveClass("mt-2 h-64 md:h-80 lg:h-96");
    expect(mapContainer).not.toHaveClass("h-full min-h-[300px]");
  });

  it("shows loading state before map is loaded", () => {
    render(<GoogleMapComponent />);

    const loadingElement = screen.getByText("Loading map...");
    expect(loadingElement).toBeInTheDocument();
  });
});
