import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const LinkStyled = styled(Link)`
  padding: 0 7px;
  border: 1px solid gray;
  border-radius: 3px;
`;
