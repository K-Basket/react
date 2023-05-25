// import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Container, LinkStyled } from './ProductsListStyled';

const ProductsList = ({ products }) => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('params') ?? ''; // читает строку запроса
  const filteredProducts = products.filter(el => el.name.includes(params));

  const updateQueryString = evt => {
    if (evt.target.value === '') setSearchParams({});
    setSearchParams({ params: evt.target.value });
  };

  return (
    <>
      <input
        type="text"
        value={params}
        onChange={updateQueryString} // перезаписывает строку запроса
      />
      <button onClick={() => setSearchParams({ params: 'basket' })}>
        change Search
      </button>

      <h3>Products List:</h3>
      <Container>
        {filteredProducts.map(product => (
          <LinkStyled key={product.id} to={`${product.id}`}>
            <p>{product.name}</p>
          </LinkStyled>
        ))}
      </Container>
    </>
  );
};

export default ProductsList;
