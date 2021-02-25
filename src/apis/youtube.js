

import axios from 'axios';

const KEY = 'AIzaSyBWwfJ9YHF4uIfgVbOG5krdD5_Yq8QrMrM';
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        type:'videos',
        maxResults:5,
        key:KEY
    }
});