import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink } from './LayoutStyled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <h3>footer</h3>
      </footer>
    </>
  );
};

export default Layout;

/*
Оборачиваем в Suspense для разделения кода.
<Suspense fallback={<div>Loading...</div>}>
  <Outlet />
</Suspense>
*/
