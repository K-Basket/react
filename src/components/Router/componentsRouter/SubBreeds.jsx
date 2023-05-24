import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP запрос по Id реализуется здесь
  // }, [])

  return <div>SubBreeds: {dogId}</div>;
};
