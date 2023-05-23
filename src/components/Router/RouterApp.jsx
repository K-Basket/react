import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';

export function RouterApp() {
  return (
    <div>
      <nav>
        <NavLink to="/">Домашняя</NavLink>
        <NavLink to="/dogs">Коллекция</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Collections />} />
        <Route path="/dogs/:dogId" element={<div>Элемент коллекция</div>} />
      </Routes>
    </div>
  );
}
