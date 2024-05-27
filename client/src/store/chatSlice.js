import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  city: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const newMessage = {
        content: action.payload,
        from: 'user',
      };
      state.messages.push(newMessage);
    },
    receiveMessage: (state, action) => {
      const newMessage = {
        content: action.payload,
        from: 'bot',
      };
      state.messages.push(newMessage);
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter((message, index) => index !== action.payload);

    },
  },
});

export const { sendMessage, receiveMessage, deleteMessage } = chatSlice.actions;

export default chatSlice.reducer;
