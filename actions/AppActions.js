import store from '../store.js';

import AppConstants from '../constants/AppConstants';

import MoodsliderActions    from './MoodsliderActions';
import VideoActions         from './VideoActions';
import UploadActions        from './UploadActions';

import axios from 'axios';

const init = () => {

    //MoodsliderActions.load();
    
}

const handleXML = async (path) => {
    if (!path) return;
    let result = await axios.get('/xmlconversion', { params: { filename: path }})
        .then((response) => {
            var programmes = cleanUpJSON(response.data.programmes);
            store.dispatch({
                type: AppConstants.APP_SET_VIDEOS,
                videos: programmes,
            });
            VideoActions.setRecommendations(programmes);
        });
}

const cleanUpJSON = (programmes) => {
    // Clean up converted XML
    for (var i = 0; i < programmes.programme.length; i++) {
        programmes.programme[i].title = programmes.programme[i].title[0];
        programmes.programme[i].episodes = parseInt(programmes.programme[i].episodes[0]);
        programmes.programme[i].genre = programmes.programme[i].genre[0];
        programmes.programme[i].image = programmes.programme[i].image[0];
        programmes.programme[i].moods = programmes.programme[i].moods[0];
        for (var mood in programmes.programme[i].moods) {
            if (programmes.programme[i].moods.hasOwnProperty(mood)) {
                programmes.programme[i][mood] = parseFloat(programmes.programme[i].moods[mood]);
            }
        }
        delete programmes.programme[i].moods;
    }
    return programmes;
}

export default {
    moodslider  : MoodsliderActions,
    videos      : VideoActions,
    upload      : UploadActions,

    init,
    handleXML,
}