import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

import utils from '../utils/utils';

const init = () => {
    return null;
}

const setSlider = (index, slidervalue) => {
store.dispatch({
    type : AppConstants.APP_SET_SLIDER_VALUE,
    index,
    slidervalue,
});
}

const setSliders = (slidervalues) => {
    store.dispatch({
        type : AppConstants.APP_SET_SLIDER_VALUES,
        slidervalues,
    });
}

export default {
    init,
    setSlider,
    setSliders,
}