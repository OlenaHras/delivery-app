import { useState, useEffect } from 'react';
import { OrdersWrapper, EmptyMsg, TitleMsg } from './OrdersCart.styled';
import OrderItem from '../OrderItem/OrderItem';
import empty from './amptyImg.png';

const OrdersCart = ({ user }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  // const savedOrders = JSON.parse(localStorage.getItem('orders'));
  const [ordersList, setOrdersList] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  );
  const [newOrder, setNewOrder] = useState();

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      console.log('here');
      setNewOrder([...ordersList, user]);
      setOrdersList([]);
      localStorage.clear();
      setTotalPrice(0);
    }
    ordersList.map(item => {
      return setTotalPrice(totalPrice => totalPrice + Number(item.price));
    });
    console.log(ordersList);
  }, []);
  // useEffect(() => {
  //   console.log(user);
  //   if (user) {
  //     console.log(user);
  //     setNewOrder([...ordersList, user]);
  //     setOrdersList([]);
  //     localStorage.clear();
  //   }
  // }, [user]);

  const handleButtonClick = item => {
    const newOrdersList = ordersList.filter(meal => meal.id !== item.id);

    setOrdersList(newOrdersList);
    setTotalPrice(totalPrice => totalPrice - Number(item.price));
    localStorage.setItem('orders', JSON.stringify(newOrdersList));
  };

  const handleTotalCount = count => {
    setTotalPrice(totalPrice => totalPrice + count);
  };

  return (
    <>
      <OrdersWrapper>
        {ordersList.length > 0 ? (
          ordersList.map(item => {
            return (
              <li key={item.id}>
                <OrderItem
                  item={item}
                  handleButtonClick={handleButtonClick}
                  handleTotalCount={handleTotalCount}
                />
              </li>
            );
          })
        ) : (
          <EmptyMsg>
            <p>There are no orders</p>
            <img src={empty} alt="empty cart" width="600" height="400" />
          </EmptyMsg>
        )}
      </OrdersWrapper>
      {<p>TOTAL: {totalPrice} $</p>}
    </>
  );
};
export default OrdersCart;
