
import axios from 'axios';

const authDemoApi = axios.create({
    baseURL: '/api'
});

export default authDemoApi;