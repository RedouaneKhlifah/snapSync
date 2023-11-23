import { render, screen, fireEvent } from "@testing-library/react";
import InputDf from "../InputDf";

test("should render and change input", () => {
    const mockOnChange = jest.fn();

    render(<InputDf label="title" onChange={mockOnChange} name="title" />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(inputElement).toHaveValue("new value");
    expect(inputElement).toHaveAttribute("name", "title");
});
