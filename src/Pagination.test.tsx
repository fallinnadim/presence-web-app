import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination", () => {
    it("render correct pagination", () => {
        render(<Pagination
            total={50}
            limit={10}
            currentPage={1}
        />);
        const pageContainer = screen.getAllByTestId("page-container");
        expect(pageContainer).toHaveLength(5);
        expect(pageContainer[0]).toHaveTextContent("1");
    });

    it("should emit clicked page", async () => {
        const user = userEvent.setup();
        // mock selectPage()
        const handleClick = vi.fn();
        render(<Pagination
            total={50}
            limit={10}
            currentPage={1}
            selectPage={handleClick}
        />);
        const pageContainer = screen.getAllByTestId("page-container");
        await user.click(pageContainer[0]);
        expect(handleClick).toHaveBeenCalledWith(1); 
    });
});