import store from '../store.js';

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
            console.log(response);
            getRecommendations(response.data.programmes);
        });
}

const getRecommendations = (programmes) => {

}

export default {
    moodslider  : MoodsliderActions,
    videos      : VideoActions,
    upload      : UploadActions,

    init,
    handleXML,
}