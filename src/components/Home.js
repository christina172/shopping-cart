import nevskayaPalitra from "./images/nevskaya-palitra.jpg";
import kohInoor from "./images/koh-i-noor.jpg";
import gamma from "./images/gamma.jpg";

function Home() {
    return (
        <div className="home">
            <h2>Welcome to ARTISTIC TOUCH!</h2>
            <h3>ABOUT US</h3>
            <p>Our online store was founded in 2012. Since then we have been striving to provide the best customer experience by partnering with the best brands in the field, expanding the range of products and improving customer service. We specialize in artistic paints and drawing supplies. We offer a wide range of products for beginner artists and professionals alike.</p>
            <h3>BRANDS</h3>
            <div className="brands">
                <img className="gamma" src={gamma} alt="gamma logo"></img>
                <img className="palitra" src={nevskayaPalitra} alt="nevskaya palitra logo"></img>
                <img className="koh-i-noor" src={kohInoor} alt="koh-i-noor logo"></img>
            </div>
            <h3>CONTACT</h3>
            <div>
                <p>Telephone: +208 (45) 123-45-67</p>
                <p>Email: art_touch@mail.com</p>
            </div>
        </div>
    )
};

export default Home;