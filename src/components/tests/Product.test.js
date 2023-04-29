import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../Product";

import gammaAquarelleBig1 from "../images/gamma-aquarelle-18-1.jpg";
import gammaAquarelleBig2 from "../images/gamma-aquarelle-18-2.jpg";
import kohInoorAquarellePencilsSmall1 from "../images/koh-i-noor-aquarelle-pencils-24-1.jpeg";
import kohInoorAquarellePencilsSmall2 from "../images/koh-i-noor-aquarelle-pencils-24-2.jpeg";

describe("Product component", () => {
    it("renders Product component", () => {
        const { container } = render(
            <Product key='Watercolour set "Studio", 18 colours, cuvettes (2.6 ml), cardboard box, GAMMA' product={{
                name: 'Watercolour set "Studio", 18 colours, cuvettes (2.6 ml), cardboard box, GAMMA',
                image1: gammaAquarelleBig1,
                image2: gammaAquarelleBig2,
                price: 4.90,
                quantity: 0,
                class: "watercolour-big-gamma"
            }} />
        );
        expect(container).toMatchSnapshot();
    });

    it("renders Product component with input field if quantity is greater than 0", () => {
        render(<Product key='Set of watercolour pencils 3718 FRUIT, 24 colours, cardboard box, KOH-I-NOOR' product={{
            name: `Set of watercolour pencils 3718 FRUIT, 24 colours, cardboard box, KOH-I-NOOR`,
            image1: kohInoorAquarellePencilsSmall1,
            image2: kohInoorAquarellePencilsSmall2,
            price: 17.30,
            quantity: 2,
            class: "watercolour-pencils-small-koh-i-noor"
        }} />)
        expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    });
})