import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
  return (
    <>
      <h3>Products List:</h3>
      {products.map(product => (
        <Link key={product.id} to={`${product.id}`}>
          <p>{product.name}</p>
        </Link>
      ))}
    </>
  );
};

export default ProductsList;
