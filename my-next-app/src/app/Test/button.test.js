import { render, screen, fireEvent } from "@testing-library/react";
import Controlled from '../controlled/page';

describe("counter component", () => {
    test("render button label", () => {
        render(<Controlled />)

        // check initial count
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

        // click the button
        const button = screen.getByRole("button", { name: /in/i });
        fireEvent.click(button);

        // verify count updated
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
    })
})
