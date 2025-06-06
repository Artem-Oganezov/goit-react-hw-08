import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/signup', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk('login', async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post('/users/login', body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await goitAPI.post('/users/logout');
    removeAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(token);
    const response = await goitAPI.get('users/current');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
