import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Main />
        <footer>
          <div>
            Images and photos from <a href="https://artgamma.ru/">Gamma</a>, <a href="https://www.nevskayapalitra.ru/">Nevskaya Palitra</a>, <a href="https://eshop.koh-i-noor.eu/">Koh-I-Noor</a>
          </div>
          <div>
            Icons from <a href="https://www.svgrepo.com/">SVG repo</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
