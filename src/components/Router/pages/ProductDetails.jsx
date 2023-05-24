import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // useParams() возвращает объект со всеми динамическими параметрами которые есть в текущем URL
  const { productsId } = useParams();
  // const params = useParams();
  // console.log('params :>> ', params);

  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  return (
    <>
      <h2>Product details {productsId}</h2>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </>
  );
};

export default ProductDetails;
