import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6470e0713de51400f7250cc6.mockapi.io/api/v1';

export const fetchShops = createAsyncThunk(
  'shops/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/shops');
      //   console.log(response.data);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getListOfShops = async () => {
  try {
    const data = await fetchShops();
    console.log(data);
    const listOfShops = data.map(({ id, name }) => {
      return { id, name };
    });
    return listOfShops;
  } catch (error) {
    console.error(error);
  }
};
