import Header from "./components/Header";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import { CartProvider } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <CartProvider>
      <div className="container w-100">
        <Header title="Shopping App" />
        <ProductList />
        <hr />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
