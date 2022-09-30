import {
  Container,
  ContainerSecondary,
  ContainerProducts,
  ContainerCart,
  ContainerInBtn,
  ListedsOnCart,
  TotalValue,
} from "./styles";
import logo from "../../assets/Mask Group.png";
import { Product } from "../Product";
import { useState } from "react";
import { Cart } from "../Cart";

export const ProductList = ({ productsList }) => {
  const [productCart, setProductCart] = useState([]);
  const [focus, setFocus] = useState(false);

  function addItem(newObject) {
    let existingItem = productCart.some(
      (element) => element.id === newObject.id
    );

    if (existingItem) {
      const newItem = productCart.map((item) => {
        if (item.id === newObject.id) {
          return {
            ...item,
            qntd: item.qntd + 1,
          };
        }
        return item;
      });
      setProductCart(newItem);
    } else {
      setProductCart([...productCart, newObject]);
    }
  }

  console.log(productCart);

  return (
    <Container>
      <header>
        <div className="div-menu">
          <img src={logo} alt="" />
          <ContainerInBtn focus={focus}>
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
              addProduct={addItem}
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
            <>
              <ListedsOnCart>
                <ul>
                  {productCart.map((product) => (
                    <Cart
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      category={product.category}
                      qntd={product.qntd}
                    ></Cart>
                  ))}
                </ul>
              </ListedsOnCart>
              <TotalValue>
                <div>
                  <p>Total</p>
                  <p>
                    R$
                    {productCart
                      .reduce((acc, curr) => curr.price * curr.qntd + acc, 0)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>
                <button type="button">Remover Todos</button>
              </TotalValue>
            </>
          )}
        </ContainerCart>
      </ContainerSecondary>
    </Container>
  );
};
