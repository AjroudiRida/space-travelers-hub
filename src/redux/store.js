import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
