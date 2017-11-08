import app from './app';

const reducers = [
  app,
];

export default (state, action) => {
  return reducers.reduce((currentState, reducer) => {
    return reducer(currentState, action);
  }, state);
};
