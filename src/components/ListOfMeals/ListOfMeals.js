import { useEffect, useState } from 'react';

import MealItem from '../MealItem/MealItem';
import { Container } from './ListOfMeals.styled';

const ListOfMeals = ({ shop, handleChoosedShop }) => {
  const savedOrders = JSON.parse(localStorage.getItem('orders'));

  const [listInCart, setListInCart] = useState(savedOrders ? savedOrders : []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(listInCart));
  }, [listInCart]);

  const handleButtonClick = item => {
    const isExist = listInCart.find(meal => meal.id === item.id);
    if (isExist) {
      const newList = listInCart.filter(item => item.id !== isExist.id);
      setListInCart(newList);
      return;
    }
    setListInCart(prevState => {
      return [...prevState, item];
    });
    handleChoosedShop(shop.id);
  };

  return (
    <Container>
      {shop?.menu.map(item => {
        return (
          <li key={item.id}>
            <MealItem item={item} handleButtonClick={handleButtonClick} />
          </li>
        );
      })}
    </Container>
  );
};
export default ListOfMeals;
