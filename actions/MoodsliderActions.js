import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

const init = () => {
    return null;
}

// Set value of one slider in store
const setSlider = (index, slidervalue) => {
    store.dispatch({
        type : AppConstants.APP_SET_SLIDER_VALUE,
        index,
        slidervalue,
    });
}

// Set value of all sliders in store
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