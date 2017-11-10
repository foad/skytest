import utils from '../utils/utils';

import MoodsliderActions    from './MoodsliderActions';
import VideoActions         from './VideoActions';
import UploadActions        from './UploadActions';

const init = () => {

    //MoodsliderActions.load();
    
}

export default {
    moodslider  : MoodsliderActions,
    videos      : VideoActions,
    upload      : UploadActions,

    init,
}