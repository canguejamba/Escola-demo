import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the heading with the provided title", () => {
    render(<Hero title="Titolo di prova" subtitle="Sottotitolo" />);
    expect(screen.getByRole("heading", { level: 1, name: "Titolo di prova" })).toBeInTheDocument();
  });

  it("renders both CTA buttons", () => {
    render(<Hero title="Titolo" subtitle="Sottotitolo" />);

    expect(screen.getByRole("button", { name: "Scopri le comunità" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Partecipa" })).toBeInTheDocument();
  });
});
