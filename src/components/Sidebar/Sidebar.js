// import { useEffect, useState } from 'react';

// import useDeliveryService from '../../services/DeliveryService';
// import Spinner from '../Spinner/Spinner';
import ShopButton from '../ShopButton/ShopButton';
import { Container } from './Sidebar.styled';

const buttonStyle = { pointerEvents: 'none', opacity: 0.4 };

const Sidebar = ({ onButtonClick, shopsList, choosedShop }) => {
  // const [shops, setShops] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const { getAllShops } = useDeliveryService();

  // useEffect(() => {
  //   setError(false);
  //   setIsLoading(true);

  //   fetchData();
  //   setIsLoading(false);
  // }, []);

  const handleButtonClick = id => {
    // console.log(id);
    onButtonClick(id);
  };
  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     await getAllShops().then(data => {
  //       setShopsList(data);
  //     });
  //   } catch (error) {
  //     setError('Error while loading data. Try again later.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // const isChhosedShop=
  return (
    <Container>
      {/* {isLoading && <Spinner />} */}
      {shopsList.length > 0 &&
        shopsList.map(({ id, name }) => {
          // if (choosedShop && id !== choosedShop) {
          //   // style = { pointerEvents: 'none', opacity: 0.6 };
          //   return;
          // }
          // style = {};
          // console.log(choosedShop);
          return (
            <li
              key={id}
              onClick={() => handleButtonClick(id)}
              style={choosedShop && choosedShop !== id ? buttonStyle : {}}
            >
              <ShopButton item={name} />
            </li>
          );
        })}
    </Container>
  );
};
export default Sidebar;
