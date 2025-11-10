import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";

describe("HomePage", () => {
  it("renders the hero section with CTAs", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Scopri le comunità" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Partecipa" })).toBeInTheDocument();
  });
});
