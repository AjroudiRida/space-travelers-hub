import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (payload, thunkAPI) => {
    try {
      const resp = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });

      return { ...state, rockets: newState };
    },
    cancelRocket: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });

      return { ...state, rockets: newState };
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.rockets = payload;
    },
    [getRockets.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
