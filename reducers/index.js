import app from './app';
import moodslider from './moodslider';
import video from './video';

const reducers = [
  app,
  moodslider,
  video
];

export default (state, action) => {
  return reducers.reduce((currentState, reducer) => {
    return reducer(currentState, action);
  }, state);
};
