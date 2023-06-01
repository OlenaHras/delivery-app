// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { getShops } from '../../redux/selectors';
import MealItem from '../MealItem/MealItem';
import { Container } from './ListOfMeals.styled';

const ListOfMeals = ({ shop }) => {
  const savedOrders = JSON.parse(localStorage.getItem('orders'));

  const [listInCart, setListInCart] = useState(savedOrders ? savedOrders : []);
  // const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  // const { shops } = useSelector(getShops);
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(listInCart));
  }, [listInCart]);

  const handleButtonClick = item => {
    const isExist = listInCart.find(meal => meal.id === item.id);
    if (isExist) return;
    setListInCart(prevState => {
      return [...prevState, item];
    });
    // handleLockalStorage();
    // localStorage.setItem('orders', JSON.stringify(listInCart));
    // console.log(savedOrders);
  };

  // const handleLockalStorage = () => {
  //   localStorage.setItem('orders', JSON.stringify(listInCart));
  // };

  return (
    <Container>
      {shop?.map(item => {
        // console.log(item);
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
