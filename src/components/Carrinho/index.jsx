import { useState } from "react";


const Carrinho = () => {

  let [carrinho, setCarrinho] = useState(0);

  const add = () => {
    setCarrinho(carrinho + 1)
  };

  if (carrinho === 0) {
    document.querySelector('.remove-button').disabled = true;
  } else {
    document.querySelector('.remove-button').disabled = false;

  }

  const remove = () => {
    if (carrinho > 0) {
      setCarrinho(carrinho - 1)
    }
  }

  return (
    <div className="carrinho-box">
      <h3>Carrinhos de Compras: {carrinho}</h3>
      <button className="add-button" onClick={() => add()}>+</button>
      <button className="remove-button" onClick={() => remove()}>-</button>
    </div>
  )


}

export default Carrinho;

