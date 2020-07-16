import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/'

export default axios.create({
    baseURL: `${corsProxy}http://localhost:3001`
})