import AppConstants from '../constants/AppConstants';

// Video reducers
export default (state = {}, payload) => {
    switch (payload.type) {
        // Set videos object
        case (AppConstants.APP_SET_VIDEOS): {
            return {
                ...state,
                videos: payload.videos,
            }
        }

        // Set recommendations array
        case (AppConstants.APP_SET_RECOMMENDATIONS): {
            return {
                ...state,
                recommendations: payload.recommendations,
            }
        }

        default: {
            return state;
        }
    }
};
