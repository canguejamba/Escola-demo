import { fireEvent, render, screen } from "@testing-library/react";
import CTAButton from "@/components/CTAButton";

describe("CTAButton", () => {
  it("renders the provided label", () => {
    render(<CTAButton>Scopri le comunità</CTAButton>);
    expect(screen.getByRole("button", { name: "Scopri le comunità" })).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<CTAButton onClick={handleClick}>Partecipa</CTAButton>);

    fireEvent.click(screen.getByRole("button", { name: "Partecipa" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
