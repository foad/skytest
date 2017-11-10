import AppConstants from '../constants/AppConstants';

// Moodslider reducers
export default (state = {}, payload) => {
    switch (payload.type) {
        // Set individual slider value
        case (AppConstants.APP_SET_SLIDER_VALUE): {
            let newState = { ...state };
            newState.sliders[payload.index] = {
                ...state.sliders[payload.index],
                value: payload.slidervalue,
            };
            return newState;
        }

        default: {
            return state;
        }
    }
};
