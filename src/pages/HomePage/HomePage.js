import { useEffect, useState } from 'react';

import useDeliveryService from '../../services/DeliveryService';
import Sidebar from '../../components/Sidebar/Sidebar';
import Spinner from '../../components/Spinner/Spinner';
import { Container } from './HomePage.styled';
import ListOfMeals from '../../components/ListOfMeals/ListOfMeals';

const HomePage = () => {
  const [shopsList, setShopsList] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [choosedShop, setChoosedShop] = useState('');

  const { getAll } = useDeliveryService();

  useEffect(() => {
    setIsLoading(true);
    getAll().then(data => {
      setShopsList(data);
      setList(data[0]);
    });
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onButtonClick = id => {
    shopsList.map(item => {
      if (item.id === id) {
        return setList(item);
      }
      return shopsList;
    });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {list.length === 0 ? (
        <Spinner />
      ) : (
        <Container>
          <Sidebar
            onButtonClick={onButtonClick}
            shopsList={shopsList}
            choosedShop={choosedShop}
          />
          <ListOfMeals
            shop={list}
            handleChoosedShop={id => setChoosedShop(id)}
          />
        </Container>
      )}
    </>
  );
};
export default HomePage;
