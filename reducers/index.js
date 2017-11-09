import app from './app';
import moodslider from './moodslider';

const reducers = [
  app,
  moodslider,
];

export default (state, action) => {
  return reducers.reduce((currentState, reducer) => {
    return reducer(currentState, action);
  }, state);
};
