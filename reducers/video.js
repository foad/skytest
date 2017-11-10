import AppConstants from '../constants/AppConstants';

export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_SET_VIDEOS): {
            return {
                ...state,
                videos: payload.videos,
            }
        }

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
