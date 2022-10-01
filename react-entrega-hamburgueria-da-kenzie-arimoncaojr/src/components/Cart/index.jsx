export const Cart = ({ productCart, removeItem }) => {
  return (
    <>
      {productCart.map((product) => (
        <li key={product.id}>
          <div>
            <img src={product.image} alt="" />
          </div>
          <div>
            <h4>{product.name}</h4>
            <p>{product.category}</p>
            <div>
              <button type="button" onClick={() => removeItem(product)}>
                Remover
              </button>
              <p>Qntd: {product.qntd}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
