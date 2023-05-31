import { CardWrapper, AddButton } from './MealItem.styled';

const MealItem = ({ item }) => {
  return (
    <CardWrapper>
      <img src={item.img} alt={item.title} width="180px" height="100px" />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <AddButton>add to cart</AddButton>
    </CardWrapper>
  );
};
export default MealItem;
