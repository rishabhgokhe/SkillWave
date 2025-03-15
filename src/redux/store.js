import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const url = "http://localhost:3000/api/v1";
// export const url = "http://skillwave20.vercel.app/api/v1";