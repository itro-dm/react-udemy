import axios from 'axios';

const KEY = 'AIzaSyAWt6sr7GtTph2zX4CH5MlSaVFjikaO4GI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})