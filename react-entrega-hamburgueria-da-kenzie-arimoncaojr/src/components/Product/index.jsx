import { Container } from "./styles";
export const Product = ({
  image,
  name,
  category,
  price,
  addProduct,
  productId,
}) => {
  return (
    <Container>
      <div className="div-img">
        <img src={image} alt="" />
      </div>
      <div className="div-infos">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {price.toString().replace(".", ",")}</p>
        <button
          type="button"
          onClick={() =>
            addProduct({
              id: productId,
              name: name,
              category: category,
              price: price,
              image: image,
              qntd: 1,
            })
          }
        >
          Adicionar
        </button>
      </div>
    </Container>
  );
};
