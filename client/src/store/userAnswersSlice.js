import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: null,
  metroStation: null,
  numberOfRooms: null,
  minValueAns: null,
  maxValueAns: null,
  apartments: [], 
};

const userAnswer = createSlice({
  name: 'userAnswer',
  initialState,
  reducers: {
    setCity:(state, action) => {
        state.city = action.payload;
    },
    setMetro: (state, action) => {
      state.metroStation = action.payload;
    },
    setNumberOfRooms: (state, action) => {
      state.numberOfRooms = action.payload;
    },
    setMinValueAns: (state, action) => {
      state.minValueAns = action.payload; 
    },
    setMaxValueAns: (state, action) => {
      state.maxValueAns = action.payload; 
    },
    setApartments: (state, action) => {
      state.apartments = action.payload;
    },
  },
});

export const { setCity, setMetro, setNumberOfRooms, setMinValueAns, setMaxValueAns, setApartments } = userAnswer.actions;

export default userAnswer.reducer;
