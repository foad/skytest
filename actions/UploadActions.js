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

    return new Promise((resolve, reject) => {
        axios.post('/upload', data).then((res) => {
             if (res.status === 200) resolve(res.data.filename);
             else reject(res.data.error);
         }).catch((err) => {
            reject(err);
         });
    });
}

export default {
    init,
    uploadRequest,
}