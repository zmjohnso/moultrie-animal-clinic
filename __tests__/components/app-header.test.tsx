import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AppHeaderComponent } from "@/components/app-header";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("AppHeaderComponent", () => {
  beforeEach(() => {
    render(<AppHeaderComponent />);
  });

  it("renders the Moultrie Animal Clinic logo", () => {
    const logo = screen.getByAltText(
      "Small Moultrie Animal Clinic dog and cat logo."
    );
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
  });

  it("renders navigation links with correct hrefs", () => {
    const navItems = [
      { href: "/", label: "Home" },
      { href: "/meet-our-team", label: "Meet Our Team" },
      { href: "/our-services", label: "Our Services" },
      { href: "/take-a-tour", label: "Take a Tour" },
      { href: "/new-clients", label: "New Clients" },
      {
        href: "https://moultrieanimalclinic.securevetsource.com/site/view/site/view/HomeDelivery.pml?retUrl=https://moultrieanimalclinic.com/&cmsTitle=MOULTRIE%20ANIMAL%20CLINIC",
        label: "Online Pharmacy",
      },
    ];

    navItems.forEach(({ href, label }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("renders social links and contact information", () => {
    const facebookLink = screen.getByRole("link", {
      name: /visit the moultrie animal clinic facebook/i,
    });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/Moultrieanimalclinic"
    );

    const phoneLink = screen.getByRole("link", { name: "+1 (904) 797-5601" });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+19047975601");

    const emailLink = screen.getByRole("link", {
      name: "moultrieanimalclinic@gmail.com",
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:moultrieanimalclinic@gmail.com"
    );
  });

  it("renders the mobile menu", () => {
    const mobileMenu = screen.getByRole("button", {
      name: "Mobile Toggle Menu",
    });
    expect(mobileMenu).toBeInTheDocument();
  });
});
