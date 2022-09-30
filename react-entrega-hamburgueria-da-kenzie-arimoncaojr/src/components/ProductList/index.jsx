import {
  Container,
  ContainerSecondary,
  ContainerProducts,
  ContainerCart,
  ContainerInBtn,
} from "./styles";
import logo from "../../assets/Mask Group.png";
import { Product } from "../Product";
import { useState } from "react";

export const ProductList = ({ productsList }) => {
  const [productCart, setProductCart] = useState([]);
  const [focus, setFocus] = useState(false);
  function putProduct(newObject) {
    return setProductCart([...productCart, newObject]);
  }
  console.log(productCart);

  return (
    <Container>
      <header>
        <div className="div-menu">
          <img src={logo} alt="" />
          <ContainerInBtn focus={focus} className="div-input-btn">
            {" "}
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              type="text"
              placeholder="Digitar Pesquisa"
            />
            <button type="button">Pesquisar</button>
          </ContainerInBtn>
        </div>
      </header>
      <ContainerSecondary>
        <ContainerProducts>
          {productsList.map((product) => (
            <Product
              key={product.id}
              productId={product.id}
              image={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
              addProduct={putProduct}
            />
          ))}
        </ContainerProducts>
        <ContainerCart>
          <div className="div-title">
            <h2>Carrinho Compras</h2>
          </div>
          {productCart.length < 1 ? (
            <div className="div-infos">
              <h3>Sua sacola está vazia</h3>
              <span>Adicione itens</span>
            </div>
          ) : (
            <div className="div-infos">
              <ul>
                {productCart.map((product) => (
                  <li key={product.id}>
                    <div>
                      <img src={product.image} alt="" />
                    </div>
                    <div>
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                      <button type="button">Remover</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ContainerCart>
      </ContainerSecondary>
    </Container>
  );
};
