import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Products Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};
