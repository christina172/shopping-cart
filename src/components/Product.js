import cartColor from "./images/cart-trolley-svgrepo-com-color.svg";

function Product(props) {
    let element;
    if (props.product.quantity === 0) {
        element = <img className="cart" src={cartColor} alt="cart" onClick={() => props.addToCart(props.product.name)}></img>
    } else {
        element = <div className="quantity">
            <form onSubmit={props.handleSubmit}>
                <button onClick={() => props.subtract(props.product.name)}>-</button>
                <input type="number" id="quantity" name="quantity" value={props.product.quantity} onChange={(event) => props.handleQuantityChange(event, props.product.name)}></input>
                <button onClick={() => props.add(props.product.name)}>+</button>
            </form>
        </div>
    }
    return (
        <div className="product">
            <div className="product-image">
                <img className="first-image" src={props.product.image1} alt={props.product.name}></img>
                <img className="second-image" src={props.product.image2} alt={props.product.name}></img>
            </div>
            <div className="product-description">
                <div className="product-name">{props.product.name}</div>
                <div className="product-price">{props.product.price} $</div>
                {element}
            </div>
        </div >
    )
};

{/* <button onClick={() => props.addToCart(props.product.name)}> Add to cart</button> */ }

export default Product;