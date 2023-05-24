import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP запрос по Id реализуется здесь
  // }, [])

  return <div>Image Gallery: {dogId}</div>;
};
