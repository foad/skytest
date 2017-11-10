import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

import nn from 'nearest-neighbor';

const init = () => {
    return null;
}

// Get current slider state and convert to query object
const getQuery = () => {
    var sliders = store.getState().sliders;
    var query = {title: '', episodes: 0, genre: '', image: '', calm: 0, sad: 0, awake: 0, fearless: 0};
    query.calm = sliders[0].value;
    query.sad = sliders[1].value;
    query.awake = sliders[2].value;
    query.fearless = sliders[3].value;
    return query;
}

// Set recommendations from given dataset, default to store videos
const setRecommendations = (videos = store.getState().videos) => {

    // If no videos, back out
    if (videos.programme === undefined) return;

    // Duplicate array so as to not taint store
    var items = [...videos.programme];

    // Get current slider valuers as query
    var query = getQuery();

    // Specify comparisons for fields
    var fields = [
        { name: 'calm', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'sad', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'awake', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'fearless', measure: nn.comparisonMethods.number, max: 1 },
    ]

    // Blank recommendations array
    var recommendations = [ {}, {}, {}, {}, {} ]

    // Iterate through 5 closest matches
    for (var i = 0; i < 5; i++) {

        // Find closest match
        nn.findMostSimilar(query, items, fields, (nearest, probability) => {

            // If nothing close, random result will do
            if (nearest === null) nearest = items[Math.floor(Math.random() * items.length)];
            
            // Set recommendation
            recommendations[i].title = nearest.title;
            recommendations[i].episodes = nearest.episodes;
            recommendations[i].genre = nearest.genre;
            recommendations[i].img = nearest.image;

            // Remove match from list to find next closest
            items = items.filter((video) => {
                return (nearest.title !== video.title);
            });

            // Push to store
            store.dispatch({
                type: AppConstants.APP_SET_RECOMMENDATIONS,
                recommendations: recommendations,
            });
        });
    }
}

export default {
    init,

    getQuery,
    setRecommendations,
}