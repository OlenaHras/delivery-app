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

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getAllShops, getAll };
};

export default useDeliveryService;
