import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const result = useParams();

  return <h3>Product details {result.productsId}</h3>;
};

export default ProductDetails;
