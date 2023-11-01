import { configureStore, Action, ThunkAction, combineReducers } from '@reduxjs/toolkit';
import { filesSlice } from './files/files.slice';

const rootReducer = combineReducers({
   files: filesSlice.reducer,
});

const scodixAiStore = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

export default scodixAiStore;

export type RootState = ReturnType<typeof scodixAiStore.getState>;
export type AppDispatch = typeof scodixAiStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
