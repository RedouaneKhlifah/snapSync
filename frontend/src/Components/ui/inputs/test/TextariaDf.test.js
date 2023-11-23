import { render, screen, fireEvent } from "@testing-library/react";
import TextareaDf from "../TextareaDf";

it("should render textaria elemnet and change it value", () => {
    const mockOnChange = jest.fn();
    render(
        <TextareaDf
            label={"message"}
            name={"message"}
            onChange={mockOnChange}
        />
    );
    const textariaElement = screen.getByRole("textbox");

    fireEvent.change(textariaElement, { target: { value: "new value" } });

    expect(textariaElement).toHaveAttribute("name", "message");
    expect(textariaElement).toHaveValue("new value");
});
