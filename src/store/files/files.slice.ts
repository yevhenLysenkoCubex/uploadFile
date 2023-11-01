import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { serviceSendFile } from './files.services';
import { initialState } from './files.state';
// import type { CommonSliceTypes } from './types';

export const sendFileToServer = createAsyncThunk(
   'files/sendFileToServer',
   async (uploadedFile: FormData, { rejectWithValue, dispatch }) => {
      try {
         const response = await serviceSendFile(uploadedFile);
         return response.data;
      } catch (error) {
         if (error instanceof Error) {
            return rejectWithValue(error);
         }
         return error;
      }
   },
);

export const filesSlice = createSlice({
   name: 'filesSlice',
   initialState,
   reducers: {},
});

export const filesState = (state: RootState) => state.files;
