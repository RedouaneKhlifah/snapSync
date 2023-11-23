import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

describe("should  interact with form ", () => {
    test("should reneder alL form components ", () => {
        const formData = {
            title: "",
            image: "",
            creator: "",
            message: "",
            tags: ""
        };

        const type = "create";
        const MochHandleChange = jest.fn();
        const MockHandleSubmit = jest.fn();
        const MockHandleClear = jest.fn();
        render(
            <Form
                formData={formData}
                type={type}
                handleChange={MochHandleChange}
                handleSubmit={MockHandleSubmit}
                ClearForm={MockHandleClear}
            />
        );

        expect(screen.getByText("creator")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("choose a file")
        ).toBeInTheDocument();
        expect(screen.getByText("title")).toBeInTheDocument();
        expect(screen.getByText("message")).toBeInTheDocument();
        expect(screen.getByText("tags")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "SUBMIT" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "CLEAR" })
        ).toBeInTheDocument();
    });
    test("should handel form submisssion", () => {
        const formData = {
            title: "test",
            image: "test",
            creator: "test",
            message: "test",
            tags: ""
        };

        const type = "create";
        const MochHandleChange = jest.fn();
        const MockHandleSubmit = jest.fn();
        const MockHandleClear = jest.fn();

        render(
            <Form
                formData={formData}
                type={type}
                handleChange={MochHandleChange}
                handleSubmit={MockHandleSubmit}
                ClearForm={MockHandleClear}
            />
        );

        fireEvent.submit(screen.getByRole("button", { name: "SUBMIT" }));

        expect(MockHandleSubmit).toHaveBeenCalledTimes(1);
    });
    
});
