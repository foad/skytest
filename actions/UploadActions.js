import store from '../store.js';

import AppConstants from '../constants/AppConstants';
import AppActions from './AppActions';

import axios from 'axios';

const init = () => {
    return null;
}

// Upload new dataset
const uploadRequest = (file) => {

    // Create form data object to work with formidable
    let data = new FormData();
    data.append('file', file);

    // Use axios for async upload
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