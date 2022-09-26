const toast = (store) => (next) => (action) => {
  console.log(action);
  if (action.type === 'error') console.log('error', action.payload.message);
  else next(action);
};

export default toast;
