import "./App.css";
import Header from "./components/header/header";
import Catalogue from "./components/catalogue/catalogue";
import Infos from "./components/infos/infos";
import Products from "./components/products/products";

function App() {
  return (
    <>
      <Header />
      <Catalogue />
      <Infos />
      <div id="bajinner">
        <div id="h1-nor">
          <h2>նորույթ</h2>
        </div>
        <div id="h1-pah">
          <h2>Պահանջված</h2>
        </div>
      </div>
      <Products />
    </>
  );
}

export default App;
