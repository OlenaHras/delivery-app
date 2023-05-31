import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-around;
  background: #4b2a99;
  height: 50px;
  width: 100%;
  padding: 10px;
`;
export const StyledLink = styled(NavLink)`
  color: '#fff';
  text-decoration: none;
`;
