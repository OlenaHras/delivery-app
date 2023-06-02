import { useState } from 'react';
import OrdersCart from '../../components/OrdersCart/OrdersCart';
import UserForm from '../../components/UserForm/UserForm';
import { Container } from './CartPage.styled';

const CartPage = () => {
  const [user, setUser] = useState({});
  const handleOrderButton = user => {
    setUser(user);
    localStorage.clear();
  };
  // const savedOrders = JSON.parse(localStorage.getItem('orders'));
  // const [orders, setOrders] = useState(savedOrders ? savedOrders : []);
  // console.log(savedOrders);
  return (
    <Container>
      <UserForm handleOrderButton={handleOrderButton} />
      <OrdersCart user={user} />
    </Container>
  );
};
export default CartPage;
