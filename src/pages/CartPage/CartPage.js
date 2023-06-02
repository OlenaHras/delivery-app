import OrdersCart from '../../components/OrdersCart/OrdersCart';
import UserForm from '../../components/UserForm/UserForm';
import { Container } from './CartPage.styled';

const CartPage = () => {
  // const savedOrders = JSON.parse(localStorage.getItem('orders'));
  // const [orders, setOrders] = useState(savedOrders ? savedOrders : []);
  // console.log(savedOrders);
  return (
    <Container>
      <UserForm />
      <OrdersCart />
    </Container>
  );
};
export default CartPage;
