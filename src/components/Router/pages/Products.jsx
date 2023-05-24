import ProductsList from '../componentsRouter/ProductsList';

const Products = () => {
  // // Возвращает объект со всеми динамическими параметрами которые есть в текущем URL
  // const { productId } = useParams();
  // console.log('params :>> ', productId);

  // useEffect(() => {
  //   // HTTP запрос по Id реализуется здесь
  // }, [])

  const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' },
    { id: '4', name: 'Product 4' },
    { id: '5', name: 'Product 5' },
    { id: '6', name: 'Product 6' },
  ];

  return <ProductsList products={products} />;

  // return (
  //   <>
  //     <h3>Products page: {productId}</h3>
  //     <ul>
  //       <li>
  //         <Link to="subbreeds">Subbreeds</Link>
  //       </li>
  //       <li>
  //         <Link to="gallery">Gallery</Link>
  //       </li>
  //     </ul>
  //     <Outlet />
  //   </>
  // );
};

export default Products;
