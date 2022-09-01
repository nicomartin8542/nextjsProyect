import React from "react";
import { useRouter } from "next/router";
const ProductItem = () => {
  //Inicializo router
  const {
    query: { productId },
  } = useRouter();

  return (
    <div>
      <h1>Esta es la pagina de items de productos: {productId}</h1>
    </div>
  );
};

export default ProductItem;
