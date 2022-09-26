//SNA
const logger = (param) => (store) => (next) => (action) => {
  // console.log('next', next); //points to next function in pipeline
  // console.log('action', action);
  next(action);
};

export default logger;
