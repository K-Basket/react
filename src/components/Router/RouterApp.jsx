import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './componentsRouter/Products';
import Layout from './componentsRouter/Layout/Layout';
import { NotFound } from './pages/NotFound';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import History from './componentsRouter/History/History';
import Successes from './componentsRouter/Successes/Successes';
import Future from './componentsRouter/Future/Future';

export function RouterApp() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="successes" element={<Successes />} />
            <Route path="future" element={<Future />} />
          </Route>

          <Route path="products" element={<Products />} />
          <Route path="products/:productsId" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}
