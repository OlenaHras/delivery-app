import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Container } from './HomePage.styled';
import ListOfMeals from '../../components/ListOfMeals/ListOfMeals';

const HomePage = () => {
  const [list, setList] = useState([]);
  const [activeShop, setActiveShop] = useState(list[0]);

  useEffect(() => {
    fetchData();
    // setActiveId(list[0]?.id);
    // handleMenuList(res);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.request(
        'https://6470e0713de51400f7250cc6.mockapi.io/api/v1/shops'
      );
      // const cutedList = response.data.slice(20, 30);
      // .then((res) => setList(res.data));
      setList(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onButtonClick = id => {
    list.map(item => {
      if (item.id === id) return setActiveShop(item);
    });
    // console.log(activeId);
  };
  return (
    list.length > 0 && (
      <Container>
        <Sidebar list={list} onButtonClick={onButtonClick} />
        {/* <Link to="menu">restaurant</Link> */}
        {/* <Link to="meals">Burgers</Link>
      <Link to="shops">Pizzas</Link> */}
        <ListOfMeals shop={activeShop} />
        {/* <Shops /> */}
        <Outlet />
      </Container>
    )
  );
};
export default HomePage;
