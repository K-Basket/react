// для разделения кода нужны динамические импорты, и обязательно экспорты длжны быть дефолтными.
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './componentsRouter/Layout/Layout';

// // Статический иимоорт
// import Home from './pages/Home';
// import Products from './componentsRouter/Products/Products';
// import NotFound from './pages/NotFound';
// import About from './pages/About';
// import ProductDetails from './pages/ProductDetails';
// import History from './componentsRouter/History/History';
// import Successes from './componentsRouter/Successes/Successes';
// import Future from './componentsRouter/Future/Future';
// import Description from './componentsRouter/Description/Description';
// import Delivery from './componentsRouter/Delivery/Delivery';

// Динамический импорт
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const About = lazy(() => import('./pages/About'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Products = lazy(() => import('./componentsRouter/Products/Products'));
const History = lazy(() => import('./componentsRouter/History/History'));
const Successes = lazy(() => import('./componentsRouter/Successes/Successes'));
const Future = lazy(() => import('./componentsRouter/Future/Future'));
const Description = lazy(() =>
  import('./componentsRouter/Description/Description')
);
const Delivery = lazy(() => import('./componentsRouter/Delivery/Delivery'));

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
          <Route path="products/:productsId" element={<ProductDetails />}>
            <Route path="description" element={<Description />} />
            <Route path="delivery" element={<Delivery />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}
