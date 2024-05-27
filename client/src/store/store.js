
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userAnswersSlice from './userAnswersSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    userAnswer: userAnswersSlice,
  },
});
