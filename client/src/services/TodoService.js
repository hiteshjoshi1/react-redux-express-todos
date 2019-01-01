import axios from 'axios';




const EXPRESS_BASE_URL = '/todos';





export  default axios.create({
    baseURL: EXPRESS_BASE_URL

});