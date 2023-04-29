import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../Main";

describe("Main component", () => {
    it("renders Main component", () => {
        const { container } = render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
})