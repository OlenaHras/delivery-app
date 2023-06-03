import { useState } from 'react';
import OrdersCart from '../../components/OrdersCart/OrdersCart';
import UserForm from '../../components/UserForm/UserForm';
import { Container } from './CartPage.styled';

const CartPage = () => {
  const [user, setUser] = useState({});
  const handleOrderButton = user => {
    setUser(user);
  };

  return (
    <Container>
      <UserForm handleOrderButton={handleOrderButton} />
      <OrdersCart user={user} />
    </Container>
  );
};
export default CartPage;
