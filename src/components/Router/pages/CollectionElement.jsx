import { Link, Outlet, useParams } from 'react-router-dom';

const CollectionElement = () => {
  // Возвращает объект со всеми динамическими параметрами которые есть в текущем URL
  const { dogId } = useParams();
  console.log('params :>> ', dogId);

  // useEffect(() => {
  //   // HTTP запрос по Id реализуется здесь
  // }, [])

  return (
    <>
      <h2>Collection Element: {dogId}</h2>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default CollectionElement;
