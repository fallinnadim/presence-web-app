import HelloWorld from "./HelloWorld";
import {render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Simple Hello World", () => {
    it("the paragraph is visible", () => {
        render(<HelloWorld />);
        expect(screen.getByTestId("message-container")).toHaveTextContent("Hello Presence App");
    });
    it("should increment count on click", async () => {
        render(<HelloWorld />);
        userEvent.click(screen.getByRole("button"));
        expect(screen.getByTestId("button-container")).toHaveTextContent("count : 1");
    });
});