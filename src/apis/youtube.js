import axios from "axios";
const KEY ='AIzaSyAlUCX5OXxkjZ-AFtDoI9t8QGEHtFPHcfk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
})