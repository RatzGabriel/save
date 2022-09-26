import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        name: action.payload.name,
        id: ++lastId,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
