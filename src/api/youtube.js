import axios from 'axios'

const KEY = 'AIzaSyDy2YA7tciy9YyBcktHQ7W_32q6BQfUH-c'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part      : 'snippet',
        maxResults: 5,
        key       : KEY
    }
});