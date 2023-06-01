import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getListOfShops } from '../../redux/operations';
// import { getShops } from '../../redux/selectors';
import useDeliveryService from '../../services/DeliveryService';
import Spinner from '../Spinner/Spinner';
import ShopButton from '../ShopButton/ShopButton';
import { Container } from './Sidebar.styled';
import { addShops } from '../../redux/shopsSlice';
const Sidebar = ({ onButtonClick }) => {
  const [shopsList, setShopsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  // const shops = useSelector(getShops);
  const { getAllShops } = useDeliveryService();

  useEffect(() => {
    setError(false);
    setIsLoading(true);

    fetchData();
    setIsLoading(false);
  }, []);

  const handleButtonClick = id => {
    console.log(id);
    onButtonClick(id);
  };
  const fetchData = async () => {
    try {
      setIsLoading(true);
      await getAllShops().then(data => {
        setShopsList(data);
      });
    } catch (error) {
      setError('Error while loading data. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading && <Spinner />}
      {shopsList.length > 0 &&
        shopsList.map(({ id, name }) => {
          // console.log(name);
          return (
            <li key={id} onClick={() => handleButtonClick(id)}>
              <ShopButton item={name} />
            </li>
          );
        })}
    </Container>
  );
};
export default Sidebar;
