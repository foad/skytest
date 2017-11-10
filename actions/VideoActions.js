import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

import utils from '../utils/utils';

import nn from 'nearest-neighbor';

const init = () => {
    return null;
}

const getQuery = () => {
    var sliders = store.getState().sliders;
    var query = {title: '', episodes: 0, genre: '', image: '', calm: 0, sad: 0, awake: 0, fearless: 0};
    query.calm = sliders[0].value;
    query.sad = sliders[1].value;
    query.awake = sliders[2].value;
    query.fearless = sliders[3].value;
    return query;
}

const setRecommendations = (videos) => {
    var items = videos.programme;
    var query = getQuery();

    var fields = [
        { name: 'calm', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'sad', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'awake', measure: nn.comparisonMethods.number, max: 1 },
        { name: 'fearless', measure: nn.comparisonMethods.number, max: 1 },
    ]

    var recommendations = [
        {},
        { title: "No content", episodes: 0, genre: "No content", img: "images/blank.png" },
        { title: "No content", episodes: 0, genre: "No content", img: "images/blank.png" },
        { title: "No content", episodes: 0, genre: "No content", img: "images/blank.png" },
        { title: "No content", episodes: 0, genre: "No content", img: "images/blank.png" },
    ]
    nn.findMostSimilar(query, items, fields, (nearest, probability) => {
        recommendations[0].title = nearest.title;
        recommendations[0].episodes = nearest.episodes;
        recommendations[0].genre = nearest.genre;
        recommendations[0].img = nearest.image;

        store.dispatch({
            type: AppConstants.APP_SET_RECOMMENDATIONS,
            recommendations: recommendations,
        })
    });
}

export default {
    init,

    getQuery,
    setRecommendations,
}