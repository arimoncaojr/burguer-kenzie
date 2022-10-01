import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";

function App() {
  const [productsList, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState([]);

  function search(product) {
    let notFind = [
      {
        id: 1,
        name: "NotFind",
      },
    ];
    let newProduct = productsList.filter(
      (element) =>
        element.name
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          .toLowerCase()
          .includes(product) ||
        (element.category
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          .toLowerCase()
          .includes(product) &&
          element)
    );
    setProductSearch(newProduct.length > 0 ? newProduct : notFind);
  }

  function homePage() {
    setProductSearch([]);
  }

  useEffect(() => {
    api
      .get(`/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <ProductList
        productsList={productSearch.length > 0 ? productSearch : productsList}
        searchProduct={search}
        backToHome={homePage}
      />
    </>
  );
}

export default App;
