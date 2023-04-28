import Product from "./Product";

function Shop(props) {
    return (
        <div className="shop">
            <div className="shop-container">
                {props.products.map((product) => {
                    return (
                        <Product key={product.name} product={product} addToCart={props.addToCart} handleQuantityChange={props.handleQuantityChange} handleSubmit={props.handleSubmit} add={props.add} subtract={props.subtract} />
                    );
                })}
            </div>
        </div>
    )
};

export default Shop;