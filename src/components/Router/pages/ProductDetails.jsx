import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation(); // сюда прилетает местоположение (location) страницы ProductsList в state текущего location, далее мы передаем это в <Link to={location.state.from}>Back to Products</Link> (см.ниже)
  const { productsId } = useParams(); // useParams() возвращает объект со всеми динамическими параметрами которые есть в текущем URL
  const backLinkLocationRef = useRef(location.state?.from ?? '/products'); // тк useRef запиисывает в себя инфу только на стадии монтирования, запишем сюда локацию для линка возврата на предыдущую страницу
  // const params = useParams();
  // console.log('params :>> ', params);

  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  // console.log('location ProductDetails :>> ', location);

  return (
    <>
      <h2>Product details {productsId}</h2>

      <Link to={backLinkLocationRef.current}>Back to Products</Link>
      {/* <Link to={location.state?.from ?? '/products'}>Back to Products</Link> */}
      <p>any image here</p>
      {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>

      <ul>
        <li>
          <Link to="description">Product description</Link>
        </li>
        <li>
          <Link to="delivery">Delivery terms</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default ProductDetails;

/*
Как это читать: 

<Link to={location.state?.from ?? '/products'}>Back to Products</Link>

Если location.state - true, тогда показывай значение location.state.from, если fasle - тогда
покажи '/products'

location.state?.from -- если location.state будет false, тогда вернется undefined
*/

/*
<Link to={location.state?.from ?? '/products'}>Back to Products</Link> 
Эта проверка нужна для того, если пользователь перейдет на новую страницу по линку находясь
на странице ProductDedails, при нажатии на кноппку "Back to Products" он вернулся по ссылке 
"/products", в противном случае слетит вся страница.
*/
