import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import CollectionElement from './pages/CollectionElement';
import Layout from './Layout';
import { Gallery } from './Gallery';
import { SubBreeds } from './SubBreeds';

export function RouterApp() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Collections />} />
          <Route path="dogs/:dogId" element={<CollectionElement />}>
            <Route path="subbreeds" element={<SubBreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </section>
  );
}
