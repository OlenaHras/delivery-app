import { useEffect, useState } from 'react';
import { CardWrapper, AddButton, ImgWrapper, Img } from './MealItem.styled';

const MealItem = ({ item, handleButtonClick }) => {
  const savedOrders = JSON.parse(localStorage.getItem('orders'));
  const [isSelected, setIsSelected] = useState(false);
  // const isSelected = savedOrders
  //   ? savedOrders.find(meal => meal.id === item.id)
  //   : null;
  useEffect(() => {
    setIsSelected(savedOrders.find(meal => meal.id === item.id) ? true : false);
  }, []);
  const onButtonClick = item => {
    handleButtonClick(item);
    setIsSelected(true);
    // setIsSelected(!isSelected);
  };

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={item.img} alt={item.title} />
      </ImgWrapper>
      <div>{item.title}</div>
      <div>{item.price} $</div>
      <AddButton onClick={() => onButtonClick(item)}>
        {isSelected ? 'added' : 'add to cart'}
      </AddButton>
    </CardWrapper>
  );
};
export default MealItem;
