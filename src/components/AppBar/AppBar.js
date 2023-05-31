import { NavLink } from 'react-router-dom';

import { Header } from './AppBar.styled';
// import logo from '../../assets/images/Logo.png';
const AppBar = () => {
  return (
    <Header>
      {/* <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink> */}

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
