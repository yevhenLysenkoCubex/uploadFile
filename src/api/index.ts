import axios from 'axios';

const instance = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      Accept: 'application/json',
   },
});

const bearerToken = process.env.REACT_APP_APP_TOKEN;
instance.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;

export default instance;
