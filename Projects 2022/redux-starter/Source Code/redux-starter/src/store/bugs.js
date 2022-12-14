import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';
import moment from 'moment';

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bugId === bug.id);
      bugs.list[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id);
      bugs.list[index].resolved = true;
    },
  },
});
export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

//Action Creators
const url = '/bugs';

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  apiCallBegan({
    url: url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type,
  });
};

//Selector

export const selectUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const selectAssignedBugs = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type,
  });
