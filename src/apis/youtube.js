import axios from 'axios';



const KEY = 'AIzaSyBgSwe9DtnguglZOqxFGkBSYgVJd2kVRfM';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: KEY
    }
});


