import { useState, useEffect } from 'react';
import useDeliveryService from '../../services/DeliveryService';
import { OrdersWrapper, EmptyMsg } from './OrdersCart.styled';
import OrderItem from '../OrderItem/OrderItem';
import empty from './amptyImg.png';

const OrdersCart = ({ user }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [ordersList, setOrdersList] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  );

  const { addOrder } = useDeliveryService();
  useEffect(() => {
    ordersList.map(item => {
      return setTotalPrice(totalPrice => totalPrice + Number(item.price));
    });
  }, [ordersList]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      addOrder({ user, ordersList }).then(data => {
        console.log(data);
      });
      setOrdersList([]);
      setTotalPrice(0);
      localStorage.clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
