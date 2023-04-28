import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sticky from "./Sticky";
import Home from "./Home";
import Shop from "./Shop";

import gammaAquarelleSmall1 from "./images/gamma-aquarelle-12-1.jpg";
import gammaAquarelleSmall2 from "./images/gamma-aquarelle-12-2.jpg";
import gammaAquarelleBig1 from "./images/gamma-aquarelle-18-1.jpg";
import gammaAquarelleBig2 from "./images/gamma-aquarelle-18-2.jpg";
import kohInoorAcrylics1 from "./images/koh-i-noor-acrylics-1.jpeg";
import kohInoorAcrylics2 from "./images/koh-i-noor-acrylics-2.jpeg";
import kohInoorOils1 from "./images/koh-i-noor-oils-1.jpeg";
import kohInoorOils2 from "./images/koh-i-noor-oils-2.jpeg";
import kohInoorAquarellePencilsSmall1 from "./images/koh-i-noor-aquarelle-pencils-24-1.jpeg";
import kohInoorAquarellePencilsSmall2 from "./images/koh-i-noor-aquarelle-pencils-24-2.jpeg";
import kohInoorAquarellePencilsBig1 from "./images/koh-i-noor-aquarelle-pencils-36-1.jpeg";
import kohInoorAquarellePencilsBig2 from "./images/koh-i-noor-aquarelle-pencils-36-2.jpeg";
import kohInoorPencils1 from "./images/koh-i-noor-pencils-1500-1.jpeg";
import kohInoorPencils2 from "./images/koh-i-noor-pencils-1500-2.jpeg";
import kohInoorPencilsDog1 from "./images/koh-i-noor-pencils-1900-1.jpeg";
import kohInoorPencilsDog2 from "./images/koh-i-noor-pencils-1900-2.jpeg";
import nevskayaPalitraOils1 from "./images/nevskaya-palitra-oils-1.png";
import nevskayaPalitraOils2 from "./images/nevskaya-palitra-oils-2.jpg";
import nevskayaPalitraTempera1 from "./images/nevskaya-palitra-tempera-1.png";
import nevskayaPalitraTempera2 from "./images/nevskaya-palitra-tempera-2.jpg";
import nevskayaPalitraAquarelle1 from "./images/nevskaya-palitra-aquarelle-1.png";
import nevskayaPalitraAquarelle2 from "./images/nevskaya-palitra-aquarelle-2.jpeg";
import nevskayaPalitraAquarellePencils1 from "./images/nevskaya-palitra-aquarelle-pencils-1.jpeg";
import nevskayaPalitraAquarellePencils2 from "./images/nevskaya-palitra-aquarelle-pencils-2.jpeg";

function Main() {
    const [products, setProducts] = useState([
        {
            name: 'Watercolour set "White Nights", 24 colours, tubes (10 ml), cardboard box, NEVSKAYA PALITRA',
            image1: nevskayaPalitraAquarelle1,
            image2: nevskayaPalitraAquarelle2,
            price: 33.40,
            quantity: 0,
            class: "watercolour-np"
        },
        {
            name: 'Watercolour pencils set "White Nights", 24 colours, tin box, NEVSKAYA PALITRA',
            image1: nevskayaPalitraAquarellePencils1,
            image2: nevskayaPalitraAquarellePencils2,
            price: 13.20,
            quantity: 0,
            class: "watercolour-pencils-np"
        },
        {
            name: 'Oil set "Master-Class", 12 colours, tubes (18 ml), cardboard box, NEVSKAYA PALITRA',
            image1: nevskayaPalitraOils1,
            image2: nevskayaPalitraOils2,
            price: 33.90,
            quantity: 0,
            class: "oil-np"
        },
        {
            name: 'Tempera set "Master-Class" 12 colours, tubes (18 ml), cardboard box, NEVSKAYA PALITRA',
            image1: nevskayaPalitraTempera1,
            image2: nevskayaPalitraTempera2,
            price: 22.80,
            quantity: 0,
            class: "tempera-np"
        },
        {
            name: 'Watercolour set "Studio", 12 colours, cuvettes (2.6 ml), cardboard box, GAMMA',
            image1: gammaAquarelleSmall1,
            image2: gammaAquarelleSmall2,
            price: 4.00,
            quantity: 0,
            class: "watercolour-small-gamma"
        },
        {
            name: 'Watercolour set "Studio", 18 colours, cuvettes (2.6 ml), cardboard box, GAMMA',
            image1: gammaAquarelleBig1,
            image2: gammaAquarelleBig2,
            price: 4.90,
            quantity: 0,
            class: "watercolour-big-gamma"
        },
        {
            name: 'Set of graphite pencils, 1502 ART, 8B-2H, 12pcs, tin box, KOH-I-NOOR',
            image1: kohInoorPencils1,
            image2: kohInoorPencils2,
            price: 14.60,
            quantity: 0,
            class: "graphite-pencils"
        },
        {
            name: 'Set of graphite pencils, 1912 ART, 8B-2H, 12pcs, tin box, KOH-I-NOOR',
            image1: kohInoorPencilsDog1,
            image2: kohInoorPencilsDog2,
            price: 19.70,
            quantity: 0,
            class: "graphite-pencils-dog"
        },
        {
            name: `Set of artists' oil paints Manes, 10 colours, tubes (16 ml), cardboard box, KOH-I-NOOR`,
            image1: kohInoorOils1,
            image2: kohInoorOils2,
            price: 34.80,
            quantity: 0,
            class: "oils-koh-i-noor"
        },
        {
            name: `Set of artists' acrylic paints, 10 colours, tubes (16 ml), cardboard box, KOH-I-NOOR`,
            image1: kohInoorAcrylics1,
            image2: kohInoorAcrylics2,
            price: 23.10,
            quantity: 0,
            class: "acrylics-koh-i-noor"
        },
        {
            name: `Set of watercolour pencils 3718 FRUIT, 24 colours, cardboard box, KOH-I-NOOR`,
            image1: kohInoorAquarellePencilsSmall1,
            image2: kohInoorAquarellePencilsSmall2,
            price: 17.30,
            quantity: 0,
            class: "watercolour-pencils-small-koh-i-noor"
        },
        {
            name: `Set of watercolour pencils 3719 FRUIT, 36 colours, cardboard box, KOH-I-NOOR`,
            image1: kohInoorAquarellePencilsBig1,
            image2: kohInoorAquarellePencilsBig2,
            price: 28.50,
            quantity: 0,
            class: "watercolour-pencils-big-koh-i-noor"
        },
    ]);
    const [items, setItems] = useState(0);
    const [total, setTotal] = useState(0);
    const addToCart = (name) => {
        setProducts(products.map((product) => {
            if (product.name === name) {
                return {
                    ...product,
                    quantity: 1
                }
            } else {
                return product;
            }
        }));
    }
    const handleQuantityChange = (event, name) => {
        setProducts(products.map((product) => {
            if (product.name === name) {
                if (event.target.value <= 0) {
                    return {
                        ...product,
                        quantity: 0
                    }
                } else {
                    return {
                        ...product,
                        quantity: Number(event.target.value)
                    }
                }
            } else {
                return product;
            }
        }));
    };
    const handleSubmit = event => {
        event.preventDefault();
    };
    const add = (name) => {
        setProducts(products.map((product) => {
            if (product.name === name) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            } else {
                return product;
            }
        }));
    };
    const subtract = (name) => {
        setProducts(products.map((product) => {
            if (product.name === name && product.quantity >= 1) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                }
            } else {
                return product;
            }
        }));
    };
    useEffect(() => {
        const itemsQuantity = products.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0,
        );
        setItems(itemsQuantity);
        const totalSum = products.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
            0,
        );
        setTotal(Math.round(totalSum * 100) / 100);
    }, [products]);
    return (
        <main>
            <Sticky items={items} total={total} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop products={products} addToCart={addToCart} handleQuantityChange={handleQuantityChange} handleSubmit={handleSubmit} add={add} subtract={subtract} />} />
            </Routes>
        </main>
    );
}

export default Main;