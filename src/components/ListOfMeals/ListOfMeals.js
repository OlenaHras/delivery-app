import MealItem from '../MealItem/MealItem';

import { Container } from './ListOfMeals.styled';

const ListOfMeals = ({ shop }) => {
  // console.log(shop);
  return (
    <Container>
      {
        // shop.length > 0 &&
        shop?.menu.map(item => {
          console.log(item);
          return (
            <li key={item.id}>
              <MealItem item={item} />
            </li>
          );
        })
      }
    </Container>
  );
};
export default ListOfMeals;
