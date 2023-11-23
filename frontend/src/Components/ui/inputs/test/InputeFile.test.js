import { render, screen, fireEvent } from "@testing-library/react";
import InputFile from "../InputFile";

test("should render file input", () => {
    const mockOnChange = jest.fn();

    render(
        <InputFile
            name="fileInput"
            placeholder="Upload Image"
            onChange={mockOnChange}
        />
    );

    const fileInputElement = screen.getByPlaceholderText("Upload Image");

    const file = new File(["test content"], "test.jpg", { type: "image/jpeg" });
    fireEvent.change(fileInputElement, { target: { files: [file] } });

    expect(fileInputElement).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
