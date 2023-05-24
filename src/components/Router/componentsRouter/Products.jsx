import ProductsList from './ProductsList/ProductsList';

const products = [
  { id: '1', name: 'Product 1', color: 'red' },
  { id: '2', name: 'Product 2', color: 'black' },
  { id: '3', name: 'Product 3', color: 'blue' },
  { id: '4', name: 'Product 4', color: 'white' },
  { id: '5', name: 'Product 5', color: 'black' },
  { id: '6', name: 'Product 6', color: 'green' },
  { id: '7', name: 'Product 7', color: 'green' },
  { id: '8', name: 'Product 8', color: 'green' },
];

const Products = () => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  return <ProductsList products={products} />;
};

export default Products;
