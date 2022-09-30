export const Cart = ({ image, name, category, qntd }) => {
  return (
    <li>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{category}</p>
        <div>
          <button type="button">Remover</button>
          <p>Qntd: {qntd}</p>
        </div>
      </div>
    </li>
  );
};
