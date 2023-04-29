import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    it("renders App component", () => {
        const { container } = render(
            <App />
        );
        expect(container).toMatchSnapshot();
    });

    test('home route does not render the sticky bar', async () => {
        render(<App />)

        expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
    });

    test('shop route renders the sticky bar', async () => {
        render(<App />)
        const user = userEvent.setup()

        // verify page content for default route
        expect(screen.getByText(/beginner artists and professionals alike/i)).toBeInTheDocument()

        // verify page content for expected route after navigating
        await user.click(screen.getByText(/shop/i))
        expect(screen.getByText(/items/i)).toBeInTheDocument()
    });

    test('input field appears after clicking cart icon on a product card (click 3 cards)', async () => {
        render(<App />);
        const user = userEvent.setup()

        await user.click(screen.getByText(/shop/i))
        const carts = screen.getAllByAltText("cart");
        console.log(carts.length);
        await act(async () => {
            await user.click(carts[6]);
        });
        await act(async () => {
            await user.click(carts[7]);
        });
        await act(async () => {
            await user.click(carts[11]);
        });

        expect(screen.getAllByRole("spinbutton").length).toBe(3);
    });

    test('total quantity and total sum are calculated as expected', async () => {
        render(<App />);
        const user = userEvent.setup()

        await user.click(screen.getByText(/shop/i))
        const carts = screen.getAllByAltText("cart");
        console.log(carts.length);
        await act(async () => {
            await user.click(carts[3]);
        });
        await act(async () => {
            await user.click(carts[7]);
        });
        await act(async () => {
            await user.click(carts[12]);
        });

        const add = screen.getAllByRole("button", { name: "+" });
        await act(async () => {
            await user.click(add[0]);
        });
        await act(async () => {
            await user.click(add[0]);
        });
        await act(async () => {
            await user.click(add[1]);
        });

        expect(screen.getByText("6 Items")).toBeInTheDocument();
        expect(screen.getByText("Total: 159.4 $")).toBeInTheDocument();
    });
})