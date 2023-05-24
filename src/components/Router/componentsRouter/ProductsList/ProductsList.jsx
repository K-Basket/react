// import { Link } from 'react-router-dom';
import { Container, LinkStyled } from './ProductsListStyled';

const ProductsList = ({ products }) => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  return (
    <>
      <h3>Products List:</h3>
      <Container>
        {products.map(product => (
          <LinkStyled key={product.id} to={`${product.id}`}>
            <p>{product.name}</p>
          </LinkStyled>
        ))}
      </Container>
    </>
  );
};

export default ProductsList;
