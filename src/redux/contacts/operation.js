import { createAsyncThunk } from '@reduxjs/toolkit';

import { goitAPI } from '../auth/operation';

export const fetchContacts = createAsyncThunk(
  'fetchContact',
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get('/contacts');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await goitAPI.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/contacts', body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
