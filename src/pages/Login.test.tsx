import {render , screen} from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
    it("the paragraph is visible", () => {
        render(<Login />);
        expect(screen.getByTestId("login-container")).toHaveTextContent("Login");
    });
    // it("should increment count on click", async () => {
    //     render(<HelloWorld />);
    //     userEvent.click(screen.getByRole("button"));
    //     expect(screen.getByTestId("button-container")).toHaveTextContent("count : 1");
    // });
});