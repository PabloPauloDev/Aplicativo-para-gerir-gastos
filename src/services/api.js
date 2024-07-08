import axios from "axios";
import Config from 'react-native-config';
const api = axios.create({
    baseURL: 'http://192.168.31.100:8001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;