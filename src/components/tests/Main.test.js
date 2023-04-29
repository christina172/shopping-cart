import React from "react";
import { HashRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../Main";

describe("Main component", () => {
    it("renders Main component", () => {
        const { container } = render(
            <HashRouter>
                <Main />
            </HashRouter>
        );
        expect(container).toMatchSnapshot();
    });
})