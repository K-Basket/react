import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Collections from './pages/Collections';
import Products from './pages/Products';
import Layout from './componentsRouter/Layout/Layout';
import { Gallery } from './componentsRouter/Gallery';
import { SubBreeds } from './componentsRouter/SubBreeds';
import { NotFound } from './pages/NotFound';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

export function RouterApp() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productsId" element={<ProductDetails />}>
            <Route path="subbreeds" element={<SubBreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}
