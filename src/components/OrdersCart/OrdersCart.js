import { useState } from 'react';
import { OrdersWrapper, EmptyMsg } from './OrdersCart.styled';
import OrderItem from '../OrderItem/OrderItem';
import empty from './ampty.webp';

// let initialTotal = 0;

const OrdersCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const savedOrders = JSON.parse(localStorage.getItem('orders'));
  const [ordersList, setOrdersList] = useState(savedOrders ? savedOrders : {});

  const handleButtonClick = item => {
    const newOrdersList = savedOrders.filter(meal => meal.id !== item.id);

    setOrdersList(newOrdersList);
    setTotalPrice(totalPrice => totalPrice - Number(item.price));
    localStorage.setItem('orders', JSON.stringify(newOrdersList));
  };

  const handleTotalCount = count => {
    // totalPrice = totalPrice + count;
    setTotalPrice(totalPrice => totalPrice + count);
    console.log(totalPrice);
  };

  return (
    <>
      <OrdersWrapper>
        {ordersList.length > 0 ? (
          ordersList.map(item => {
            // console.log(Number(item.price));
            // initialTotal += Number(item.price);

            // setTotalPrice(totalPrice => totalPrice + Number(item.price));
            // setTotalPrice(prevState => {
            //   return prevState + Number(item.price);
            // });
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
      {savedOrders.length > 0 && <p>TOTAL: {totalPrice} $</p>}
    </>
  );
};
export default OrdersCart;
