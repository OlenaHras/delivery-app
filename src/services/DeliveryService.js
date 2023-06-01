import axios from 'axios';

const _apiBase = 'https://delivery-backend-v5o1.onrender.com/shops';

const useDeliveryService = () => {
  const getAllShops = async () => {
    try {
      const { data } = await axios.request(_apiBase);
      const listOfShops = data.map(({ id, name }) => {
        return { id, name };
      });
      return listOfShops;
    } catch (error) {
      console.error(error);
    }
  };
  const getAll = async () => {
    try {
      const { data } = await axios.request(_apiBase);
      // const listOfShops = data.map(({ id, name }) => {
      //   return data;
      // });
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  // const getMenuById = async () => {
  //   const response = await axios.request(_apiBase);
  // }

  const getCrispyChicken = async () => {
    try {
      const response = await axios.request(_apiBase);
      //   console.log(response.data);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  };
  const getMcDack = async () => {
    try {
      const response = await axios.request(_apiBase);
      //   console.log(response.data[0]);
      return response.data[1];
    } catch (error) {
      console.error(error);
    }
  };
  const getBigBurger = async () => {
    try {
      const response = await axios.request(_apiBase);
      return response.data[2];
    } catch (error) {
      console.error(error);
    }
  };
  return { getAllShops, getAll, getCrispyChicken, getMcDack, getBigBurger };
};

export default useDeliveryService;
