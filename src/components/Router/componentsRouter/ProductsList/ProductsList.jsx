// import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container, LinkStyled } from './ProductsListStyled';

const ProductsList = ({ products }) => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  const location = useLocation(); // возвращает объект местоположения
  const [searchParams, setSearchParams] = useSearchParams();
  const params = (searchParams.get('params') ?? '').toLowerCase(); // читает строку запроса
  // const normalizeParams = params.toLowerCase();
  const filteredProducts = products.filter(el =>
    el.name.toLowerCase().includes(params)
  );

  const updateQueryString = evt => {
    if (evt.target.value === '') setSearchParams({});
    setSearchParams({ params: evt.target.value });
  };

  // console.log('location ProductList :>> ', location);

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
          <LinkStyled
            key={product.id}
            to={`${product.id}`}
            state={{ from: location }} // передаем объект местоположения
          >
            <p>{product.name}</p>
          </LinkStyled>
        ))}
      </Container>
    </>
  );
};

export default ProductsList;
