import { NavLink } from 'react-router-dom';

import { Header } from './AppBar.styled';
import logo from './logo.png';
const AppBar = () => {
  return (
    <Header>
      <NavLink to="/">
        <img src={logo} alt="logo" width="50px" height="50px" />
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? '#00CED1' : '#fff',
          };
        }}
      >
        Shops
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? '#00CED1' : '#fff',
          };
        }}
      >
        Shopping Cart
      </NavLink>
    </Header>
  );
};

export default AppBar;
