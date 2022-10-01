import { Li, DivImg, DivInfos, DivBtn } from "./styles";

export const Cart = ({ productCart, removeItem }) => {
  return (
    <>
      {productCart.map((product) => (
        <Li key={product.id}>
          <DivImg>
            <img src={product.image} alt="" />
          </DivImg>
          <div className="container">
            <DivInfos>
              <h4>
                {product.name.length > 14
                  ? product.name.substring(0, 14) + "..."
                  : product.name}
              </h4>
              <p>{product.category}</p>
            </DivInfos>
            <DivBtn>
              <button type="button" onClick={() => removeItem(product)}>
                Remover
              </button>
              <p>Qntd: {product.qntd}</p>
            </DivBtn>
          </div>
        </Li>
      ))}
    </>
  );
};
