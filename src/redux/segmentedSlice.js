import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)

const SunMode = true;
const initialState = { SunMode }
const segmentedSlice = createSlice({
    name: 'segmented',
    initialState,
    reducers: {
        setSegmentedMode: (state, action) => {
       state.SunMode= action.payload;
      },
    },
  });

// export state to global
export const selectSegmentedSunMode = (state) => state.segmented.SunMode;

// export actions to global
export const { setSegmentedMode } = segmentedSlice.actions;

// export reducer to global
export default segmentedSlice.reducer;