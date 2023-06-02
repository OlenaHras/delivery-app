import { useState, useEffect } from 'react';
import { OrdersWrapper, EmptyMsg } from './OrdersCart.styled';
import OrderItem from '../OrderItem/OrderItem';
import empty from './ampty.webp';

const OrdersCart = ({ user }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const savedOrders = JSON.parse(localStorage.getItem('orders'));
  const [ordersList, setOrdersList] = useState(savedOrders ? savedOrders : []);

  useEffect(() => {
    ordersList.map(item => {
      return setTotalPrice(totalPrice => totalPrice + Number(item.price));
    });
  }, [ordersList]);

  const handleButtonClick = item => {
    const newOrdersList = savedOrders.filter(meal => meal.id !== item.id);

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
