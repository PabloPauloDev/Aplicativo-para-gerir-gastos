import axios from "axios";

const api = axios.create({
    baseURL: 'localhost:8001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;