import AppConstants from '../constants/AppConstants';


// Main app reducers
export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_DEFAULT_ACTION): {
            return state;
        }

        default: {
            return state;
        }
    }
};
