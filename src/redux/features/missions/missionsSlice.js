import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (payload, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });

      return { ...state, missions: newState };
      // console.log(payload)
    },
    leaveMission: (state, { payload }) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });

      return { ...state, missions: newState };
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.missions = payload;
    },
    [getMissions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
