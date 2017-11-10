import app from './app';
import moodslider from './moodslider';
import video from './video';

const reducers = [
  app,
  moodslider,
  video
];

// Collate all reducers to actions
export default (state, action) => {
  return reducers.reduce((currentState, reducer) => {
    return reducer(currentState, action);
  }, state);
};
