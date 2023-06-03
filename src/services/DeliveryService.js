import axios from 'axios';

const _apiBase = 'https://delivery-backend-v5o1.onrender.com';

const useDeliveryService = () => {
  const getAll = async () => {
    try {
      const { data } = await axios.request(`${_apiBase}/shops`);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const addOrder = async body => {
    try {
      const { data } = await axios.put(`${_apiBase}/order`, { body });

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getAll, addOrder };
};

export default useDeliveryService;
