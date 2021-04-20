import axios from 'axios'

const KEY = 'AIzaSyBkFo-t7kF_hOdesDFhp5Tbq3i279tDsJY'

//Request configuration
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        //part: A comma-separated list of one or more search resource properties that the API response will include. 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})










//API key: AIzaSyBkFo-t7kF_hOdesDFhp5Tbq3i279tDsJY
//https://developers.google.com/youtube/v3/docs/search/list
//URL:https://www.googleapis.com/youtube/v3/search(GET)