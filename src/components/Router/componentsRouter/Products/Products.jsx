import ProductsList from '../ProductsList/ProductsList';

const products = [
  { id: '1', name: 'Banana', color: 'red' },
  { id: '2', name: 'Apricot', color: 'black' },
  { id: '3', name: 'Cherry', color: 'blue' },
  { id: '4', name: 'Pineapple', color: 'white' },
  { id: '5', name: 'Pear', color: 'black' },
  { id: '6', name: 'Mango', color: 'green' },
  { id: '7', name: 'Strawberry', color: 'green' },
  { id: '8', name: 'Watermelon', color: 'green' },
];

const Products = () => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  return <ProductsList products={products} />;
};

export default Products;
