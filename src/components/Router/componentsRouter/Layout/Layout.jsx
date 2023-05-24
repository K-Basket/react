import { NavLink, Outlet } from 'react-router-dom';
import { Header, StyledNavLink } from './LayoutStyled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="about">About</StyledNavLink>
          <StyledNavLink to="products">Products</StyledNavLink>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
};

export default Layout;
