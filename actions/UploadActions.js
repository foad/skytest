import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

import utils from '../utils/utils';

import axios from 'axios';

const init = () => {
    return null;
}

const uploadRequest = (file) => {
    let data = new FormData();
    data.append('file', file);

    axios.post('/upload', data);
}

export default {
    init,
    uploadRequest,
}