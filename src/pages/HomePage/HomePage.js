import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';

import useDeliveryService from '../../services/DeliveryService';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Container } from './HomePage.styled';
import ListOfMeals from '../../components/ListOfMeals/ListOfMeals';

const HomePage = () => {
  // const savedOrders = JSON.parse(localStorage.getItem('orders'));
  const [shopsList, setShopsList] = useState([]);
  const [list, setList] = useState([]);
  // const [listInCart, setListInCert] = useState(savedOrders ? savedOrders : []);

  const { getAll } = useDeliveryService();

  useEffect(() => {
    getAll().then(data => {
      setShopsList(data);
      setList(data[0].menu);
      console.log(data);
    });
  }, []);

  const onButtonClick = id => {
    shopsList.map(item => {
      console.log(item.menu);
      if (item.id !== id) return;

      return setList(item.menu);
    });
  };

  return (
    list.length > 0 && (
      <Container>
        <Sidebar onButtonClick={onButtonClick} />
        <ListOfMeals shop={list} />
        <Outlet />
      </Container>
    )
  );
};
export default HomePage;
