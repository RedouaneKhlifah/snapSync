import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render the Header Component", () => {
    render(<Header />);
    const headingElement = screen.getByText(/SnapSync/i);
    expect(headingElement).toBeInTheDocument();
});
