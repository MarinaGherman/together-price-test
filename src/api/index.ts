import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL,
    params: {
        key
    }
});

export default api;
