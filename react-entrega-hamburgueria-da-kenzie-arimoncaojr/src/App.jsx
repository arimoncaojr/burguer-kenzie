import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";

function App() {
  const [productsList, setProducts] = useState([]);

  useEffect(() => {
    api
      .get(`/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <ProductList productsList={productsList} />
    </>
  );
}

export default App;
